import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { PackageContext } from '../context';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function PackageDependencies() {
  const packageContext = useContext(PackageContext);
  const [dependencies, setDependencies] = useState('');

  const getPackage = async name => await fetch(`/${name}/latest`).then(response => response.json());

  const { data, isLoading } = useQuery({
    queryKey: packageContext.name,
    queryFn: () => getPackage(packageContext.name),
    enabled: !!packageContext.name,
  });

  useEffect(() => {
    const getSubdependencies = async npmPackage => {
      if (!npmPackage.dependencies) {
        return;
      }

      const subdependencies = await Promise.all(
        Object.entries(npmPackage.dependencies).map(async dependency => {
          const dependencies = await getDependencies(dependency[0]);
          return dependencies;
        }),
      );

      return subdependencies;
    };

    const getDependencies = async name => {
      if (!name) {
        return;
      }

      const npmPackage = await getPackage(name);

      const subdependencies = await getSubdependencies(npmPackage);

      return (
        <li key={name}>
          {name}
          <ol>{subdependencies}</ol>
        </li>
      );
    };

    const fetchDependencies = async () => {
      const d = await getDependencies(packageContext.name);
      setDependencies(<ol className="parent-npm-package">{d}</ol>);
    };

    fetchDependencies();
  }, [packageContext.name]);

  const sectionTitle = !packageContext.name
    ? '- Search a package to list its dependencies -'
    : data === 'Not Found'
    ? `Package not found: ${packageContext.name}`
    : `Dependencies of: ${packageContext.name}`;

  const validPackage = !!packageContext.name && !!data && data !== 'Not Found';

  return (
    <Paper elevation={3} className="package-dependencies">
      <Typography variant="h6" component="h2" gutterBottom data-test="package-dependencies-title">
        {sectionTitle}
      </Typography>
      {validPackage && (
        <div data-test="package-dependencies-tree-view">
          {isLoading ? 'Loading...' : !dependencies ? '- No dependencies -' : dependencies}
        </div>
      )}
    </Paper>
  );
}

export default PackageDependencies;

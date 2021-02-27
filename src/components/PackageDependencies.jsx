import React, { useContext } from 'react';
import { useQuery } from 'react-query';

import { PackageContext } from '../context';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function PackageDependencies() {
  const packageContext = useContext(PackageContext);

  const { data, isLoading } = useQuery(
    packageContext.name,
    () => fetch(`/${packageContext.name}/latest`).then(response => response.json()),
    { enabled: !!packageContext.name },
  );

  const sectionTitle = !packageContext.name
    ? '- Search a package to list its dependencies -'
    : data === 'Not Found'
    ? `Package not found: ${packageContext.name}`
    : `Dependencies of: ${packageContext.name}`;

  const validPackage = !!packageContext.name && data !== 'Not Found';

  return (
    <Paper elevation={3} className="package-dependencies">
      <Typography variant="h6" component="h2" gutterBottom data-test="package-dependencies-title">
        {sectionTitle}
      </Typography>
      {validPackage && (
        <div data-test="package-dependencies-tree-view">
          {isLoading ? (
            'Loading...'
          ) : !data?.dependencies ? (
            '- No dependencies -'
          ) : (
            <ul>
              {Object.entries(data.dependencies).map(([packageName, version]) => (
                <li key={packageName}>{`${packageName}: ${version}`}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Paper>
  );
}

export default PackageDependencies;

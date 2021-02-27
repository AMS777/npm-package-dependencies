import React from 'react';
import { useQuery } from 'react-query';

import { makeNpmPackageUrl } from '../utils/urls';

import CircularProgress from '@material-ui/core/CircularProgress';

const getSubdependencies = npmPackage => {
  if (!npmPackage?.dependencies || Object.keys(npmPackage.dependencies).length === 0) {
    return;
  }

  const subdependencies = Object.keys(npmPackage.dependencies).map(packageName => (
    <OnePackageDependencies packageName={packageName} key={packageName} />
  ));

  return subdependencies;
};

function OnePackageDependencies({ packageName }) {
  const { data, isLoading } = useQuery({
    queryKey: packageName,
    queryFn: () => fetch(makeNpmPackageUrl(packageName)).then(response => response.json()),
    enabled: !!packageName,
  });

  const subdependencies = getSubdependencies(data);

  return (
    <li>
      {data === 'Not Found' && 'Package not found: '}
      {isLoading ? <CircularProgress size="0.8em" /> : packageName}
      {!!subdependencies && <ol>{subdependencies}</ol>}
    </li>
  );
}

export default OnePackageDependencies;

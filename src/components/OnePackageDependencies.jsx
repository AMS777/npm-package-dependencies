import React from 'react';
import { useQuery } from 'react-query';

const getSubdependencies = npmPackage => {
  if (!npmPackage?.dependencies || Object.keys(npmPackage.dependencies).length === 0) {
    return;
  }

  const subdependencies = Object.keys(npmPackage.dependencies).map(packageName => (
    <OnePackageDependencies packageName={packageName} />
  ));

  return subdependencies;
};

function OnePackageDependencies({ packageName }) {
  const { data, isLoading } = useQuery({
    queryKey: packageName,
    queryFn: () => fetch(`/${packageName}/latest`).then(response => response.json()),
    enabled: !!packageName,
  });

  const subdependencies = getSubdependencies(data);

  return (
    <li key={packageName}>
      {data === 'Not Found' && 'Package not found: '}
      {isLoading ? 'Loading...' : packageName}
      {!!subdependencies && <ol>{subdependencies}</ol>}
    </li>
  );
}

export default OnePackageDependencies;

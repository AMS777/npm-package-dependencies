import React, { useContext } from 'react';

import { PackageContext } from '../context';

import OnePackageDependencies from './OnePackageDependencies';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function PackageDependencies() {
  const packageContext = useContext(PackageContext);

  const sectionTitle = !packageContext.name
    ? '- Search a package to list its dependencies -'
    : `Dependencies of: ${packageContext.name}`;

  return (
    <Paper elevation={3} className="package-dependencies">
      <Typography variant="h6" component="h2" gutterBottom data-test="package-dependencies-title">
        {sectionTitle}
      </Typography>
      {packageContext.name && (
        <ol className="parent-npm-package" data-test="package-dependencies-tree-view">
          <OnePackageDependencies packageName={packageContext.name} />
        </ol>
      )}
    </Paper>
  );
}

export default PackageDependencies;

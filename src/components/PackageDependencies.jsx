import React, { useContext } from 'react';

import { PackageContext } from '../context';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function PackageDependencies() {
  const packageContext = useContext(PackageContext);

  return (
    <Paper elevation={3} className="package-dependencies">
      <Typography variant="h6" component="h2" gutterBottom data-test="package-dependencies-title">
        {packageContext.packageName}
      </Typography>
      <div data-test="package-dependencies-tree-view">Dependencies placeholder</div>
    </Paper>
  );
}

export default PackageDependencies;

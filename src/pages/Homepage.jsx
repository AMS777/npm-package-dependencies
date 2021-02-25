import React from 'react';

import { PackageContextProvider } from '../context';

import { Search, PackageDependencies } from '../components';

import Typography from '@material-ui/core/Typography';

function Homepage() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom data-test="homepage-title">
        NPM Package Dependencies
      </Typography>
      <Typography variant="subtitle1" gutterBottom data-test="homepage-description">
        This application takes the name of an NPM package and lists its dependencies.
      </Typography>
      <PackageContextProvider>
        <Search />
        <PackageDependencies />
      </PackageContextProvider>
    </>
  );
}

export default Homepage;

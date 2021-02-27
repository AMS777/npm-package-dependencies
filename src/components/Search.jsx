import React, { useContext, useState } from 'react';

import { PackageContext } from '../context';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Search() {
  const packageContext = useContext(PackageContext);
  const [packageName, setPackageName] = useState('');

  const handleChangeSearchField = event => {
    setPackageName(event.target.value);
  };

  const handleSearch = event => {
    event.preventDefault();
    packageContext.setName(packageName);
  };

  return (
    <Paper elevation={3}>
      <form noValidate className="search-form" onSubmit={handleSearch}>
        <TextField
          label="NPM package"
          name="npmPackage"
          value={packageName}
          onChange={handleChangeSearchField}
          variant="outlined"
          margin="dense"
          className="search-field"
          data-test="search-field"
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          color="primary"
          data-test="search-button"
        >
          Search
        </Button>
      </form>
    </Paper>
  );
}

export default Search;

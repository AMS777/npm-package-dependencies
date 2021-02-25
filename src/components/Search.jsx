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

  const handleSearch = () => {
    packageContext.setPackageName(packageName);
  };

  return (
    <Paper elevation={3}>
      <form noValidate className="search-form">
        <TextField
          label="NPM package"
          value={packageName}
          onChange={handleChangeSearchField}
          variant="outlined"
          margin="dense"
          className="search-field"
          data-test="search-field"
        />
        <Button
          onClick={event => handleSearch(event)}
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

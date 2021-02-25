import React from 'react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Search() {
  return (
    <Paper elevation={3}>
      <form noValidate className="search-form">
        <TextField
          label="NPM package"
          variant="outlined"
          margin="dense"
          className="search-field"
          data-test="search-field"
        />
        <Button variant="contained" color="primary" data-test="search-button">
          Search
        </Button>
      </form>
    </Paper>
  );
}

export default Search;

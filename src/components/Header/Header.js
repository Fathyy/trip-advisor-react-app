import React, { useState } from 'react';
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material'
import { Autocomplete } from '@react-google-maps/api'
import SearchIcon from '@mui/icons-material/Search';

// this is a hook
 import useStyles from './styles'

const Header = ({ setCoordinates}) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng})
  }
  
  return (
    <AppBar position='static'>
      <Toolbar className={classes.Toolbar}>
        <Typography variant='h5' className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display='flex'>
          <Typography variant='h6' className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>

              <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, 
              inout: classes.inputInput}}/>
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
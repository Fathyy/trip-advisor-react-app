import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import React, { useEffect, useState, createRef } from 'react'
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, childClicked, isLoading, type,
  setType,
  rating,
  setRating}) => {
  const classes = useStyles();
  
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);
  
  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Restaurants, hotels and attractions around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem'/>
        </div>
      ) : (
          <>
        <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>

      </FormControl>
      

      <FormControl className={classes.FormControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            {/* write the import for this component */}
            <PlaceDetails place={place}
            selected ={Number(childClicked) === i}
            refProp={elRefs[i]}/>
          </Grid>
        ))}
      </Grid>
      </>
      )}
    </div>
  )
}

export default List
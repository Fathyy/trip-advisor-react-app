import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import React, { useEffect, useState } from 'react'


const List = ({ places, childClicked, isLoading, type,
  setType,
  rating,
  setRating}) => {
  const classes = useStyles();
  
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs =  Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
    setElRefs(refs)
  }, [places])

  // const places =[
  //   {name: 'Cool place'},
  //   {name: 'Best food'},
  //   {name: 'Delisioso'},
  //   {name: 'Cool place'},
  //   {name: 'Best food'},
  //   {name: 'Delisioso'},
  //   {name: 'Cool place'},
  //   {name: 'Best food'},
  //   {name: 'Delisioso'},
  // ]

  return (
    <div className={classes.container}>
      <Typography variant="h4">
        Food & Dining around you
      </Typography>
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem'/>
        </div>
      ) : (
          <>
        <FormControl className={classes.FormControl}>
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
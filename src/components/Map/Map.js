import React from 'react'
import googleMapReact from 'google-map-react'
import { Paper, Rating, Typography, useMediaQuery } from '@mui/material'
// change the icon below later, it's not the right one
import { LocationCityOutlined } from '@mui/icons-material'

import useStyles from './styles'


const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width: 600px)');

  return (
    <div className={classes.mapContainer}>
      <googleMapReact bootstrapURLKeys = {{ key: '' }}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={''}
      onChange={(e) => {
        setCoordinates({ lat: e.center.lat, lng: e.center.lng})
        setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
      }}
      onChildClick={(child) => setChildClicked(child)}>

        {places.length && places.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {/* if it's not desktop show the pins, otherwise show the paper */}
            {!isDesktop
              ? <LocationCityOutlined color="primary" fontSize="large" />
              : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
                  <img className={classes.pointer} 
                  src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  alt={place.name}/>
                  <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )}
          </div>
        ))}

      </googleMapReact>
    </div>
  )
}

export default Map
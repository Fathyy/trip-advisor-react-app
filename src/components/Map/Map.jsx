import React from 'react'
import googleMapReact from 'google-map-react'
import { Paper, Rating, Typography, useMediaQuery } from '@mui/material'
// change the icon below later, it's not the right one
import { LocationCityOutlined } from '@mui/icons-material'

import useStyles from './styles'


const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)');

  // create the coordinates
  const coordinates = { lat:0, lng: 0 }

  return (
    <div className={classes.mapContainer}>
      <googleMapReact bootstrapURLKeys = {{ key: '' }}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50, 50, 50, 50]}
      options={''}
      onChange={''}
      onChildClick={''}>

      </googleMapReact>
    </div>
  )
}

export default Map
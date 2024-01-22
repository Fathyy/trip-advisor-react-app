import React from 'react'
import googleMapReact from 'google-map-react'
import { Paper, Rating, Typography, useMediaQuery } from '@mui/material'
// change the icon below later, it's not the right one
import { LocationCityOutlined } from '@mui/icons-material'

import useStyles from './styles'


const Map = ({ setCoordinates, setBounds, coordinates}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)');



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
      onChildClick={''}>

      </googleMapReact>
    </div>
  )
}

export default Map
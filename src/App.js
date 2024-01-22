import { CssBaseline, Grid } from "@mui/material";
import { Header, Map, List } from './components'
import { getPlacesData } from "./api";
import { useEffect, useState } from "react";


function App() {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne)
    .then((data) => {
      console.log(data);
      setPlaces(data)
    })
  }, [coordinates, bounds])
  return (
    <>
    <CssBaseline/>
    <Header/>
    <Grid container spacing={3} style={{ width: '100%'}}>
      <Grid item xs={12} md={4}>
        <List/>
      </Grid>
      <Grid item xs={12}></Grid>
      <Map setCoordinates={setCoordinates}
      setBounds={setBounds}
      coordinates={coordinates}/>
    </Grid>
    </>
  );
}

export default App;
  
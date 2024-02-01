import { CssBaseline, Grid } from "@mui/material";
import { Header, Map, List } from './components'
import { getPlacesData } from "./api";
import { useEffect, useState } from "react";


function App() {
  const [places, setPlaces] = useState([]);

  const [filteredPlaces, setFilteredPlaces] = useState([])

  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({});

  const [childClicked, setChildClicked] = useState(null);

  const [isLoading, setIsLoading] = useState(false)

  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  // useEffect that changes when the rating changes
  useEffect(()=>{
    const filtered = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filteredPlaces);
  }, [rating])

  useEffect(() => {
    if(bounds.sw && bounds.ne) {
    setIsLoading(true);
    getPlacesData(type, bounds.sw, bounds.ne)
    .then((data) => {
      setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
      console.log(data);
      setPlaces(data);
      setFilteredPlaces([])
      setIsLoading(false);
    })
  }
  }, [type, bounds])
  return (
    <>
    <CssBaseline/>
    <Header setCoordinates={setCoordinates}/>
    <Grid container spacing={3} style={{ width: '100%'}}>
      <Grid item xs={12} md={4}>
        <List places={places}
        childClicked={childClicked}
        isLoading={isLoading}
        type={type}
        setType={setType}
        rating={rating}
        setRating={setRating}/>

      </Grid>
      <Grid item xs={12}></Grid>
      <Map setCoordinates={setCoordinates}
      setBounds={setBounds}
      coordinates={coordinates}
      places={filteredPlaces.length ? filteredPlaces : places}
      setChildClicked={setChildClicked}/>
    </Grid>
    </>
  );
}

export default App;
  
// this is where we are going to keep our api calls
import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async (type, sw, ne) => {
    try {
       const {data : { data }} = await axios.get(url, options); 
       return data;
       
    } catch (error) {
        console.log(error);  
    }
}

// getting the weather api, this one is a different api from the tutorial
export const getWeatherData = async () => {
  try {
    const { data } = await axios.get('https://weather-api99.p.rapidapi.com/weather', {
      params: {city: '<REQUIRED>'},
      headers: {
        'X-RapidAPI-Key': 'ab690951femsh0dccb26a7b712d4p1fcae0jsn97c8c79c0cf4',
        'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
      }
    });
    
  } catch (error) {
    console.log(error);
  }
}
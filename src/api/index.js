import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
    try {
       const {data : { data }} = await axios.get(`https://tripadvisor16.p.rapidapi.com/api/v1/${type}/searchLocation`, {

        url: URL,
        params: {query: 'mumbai'},
        
      }); 
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
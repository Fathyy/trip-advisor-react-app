import axios from 'axios';

const URL = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation'


export const getPlacesData = async (sw, ne) => {
    try {
       const {data : { data }} = await axios.get(URL, {

        url: URL,
        params: {query: 'mumbai'},
        
      };); 
    } catch (error) {
        console.log(error);
        
    }
}
// This is where we keep all our API calls

import axios from 'axios';


const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'




export const getPlacesData = async (sw, ne) => {
    try {
        
        const { data: { data }} = await axios.get(URL,
          {
 
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              currency: 'ZAR',
             
            },
            headers: {
              'X-RapidAPI-Key': 'cd777a42dcmsh51c1702c92c358ep1f9ef9jsn5c8ac7e51483',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data;
    } catch (error) {
        console.log(error)
        
    }


    
};
import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './src/components/api/index';
import Header from './src/components/Header/Header';
import List from './src/components/List/List';
import Map from './src/components/Map/Map';




const App = () => {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] =useState({});
  const [bounds, setBounds] =useState([]);
  //the bounds refer to the topright and topleft of the map
  const [childClicked, setChildClicked] = useState({});
  const [isLoading, setLoading]= useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  



  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({ lat: latitude, lng: longitude});

    })
// Navigator.geolocation.getCurrentPosition to get the users unique location when permission is given by the user

  }, []);

  useEffect(() => {
    if(bounds.sw && bounds.ne) {
      setLoading(true);
    
      getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
        
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setLoading(false);
      })
    }
  }, [type, coordinates, bounds]);


  return (
    <>
    <CssBaseline/>
    <Header setCoordinates={setCoordinates}/>
    <Grid container spacing={3} style={{ width: '100%'}}>
      <Grid item xs={12} md={4}>
        <List places={places} childClicked={childClicked} isLoading={isLoading} type={type} setType={setType} rating={rating} setRating={setRating} />


      </Grid>
      <Grid item xs={12} md={8}>
        <Map
        places={places}
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        setChildClicked={setChildClicked}
        
        
        //passed them as props to the map component
        
        />

      </Grid>


    </Grid>
    </>
  );
}

export default App;
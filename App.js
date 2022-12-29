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

  



  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({ lat: latitude, lng: longitude});

    })
// Navigator.geolocation.getCurrentPosition to get the users unique location when permission is given by the user

  }, []);

  useEffect(() => {
      setLoading(true);
    
      getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        
        setPlaces(data);
        setLoading(false);
      })
  }, [coordinates, bounds]);


  return (
    <>
    <CssBaseline/>
    <Header setCoordinates={setCoordinates}/>
    <Grid container spacing={3} style={{ width: '100%'}}>
      <Grid item xs={12} md={4}>
        <List places={places} childClicked={childClicked} isLoading={isLoading}/>


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
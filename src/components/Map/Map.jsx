import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, usedMediaQuery, useMediaQuery} from '@material-ui/core' //Paper is basically a div with a coloured background. UseMedia query makes the map more responsive.
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'



import useStyles from './styles';
import { PlaylistAddCheck } from '@material-ui/icons';
// map is receiving different props from app.js
const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
    
   const classes = useStyles();
   const isDesktop = useMediaQuery('(min-width:600px)');
   


   return(
    <div className={classes.mapContainer}>
        <GoogleMapReact 
        bootstrapURLKeys={{key:'AIzaSyB6pfnKWG4SrfW5_5XO0Z-aDrxWXuGrFxg'}} 
        defaultCenter={coordinates} 
        center={coordinates} 
        defaultZoom={14} 
        margin={[50, 50, 50, 50]} 
        options={''} 
        onChange={(e) => { 
            setCoordinates({ lat: e.center.lat, lng: e.center.lng});
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
        }} 
        onChildClick={(child) => setChildClicked(child)}> 
        {places?.map((place, i) => (
            <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)} //They are stings so covert to number with the number function
            key={i}
            >
                {
                    !isDesktop ? (
                        <LocationOnOutlinedIcon color="primary" fontSize="large" />
                    ) : (
                            <Paper elavation={3} className={classes.paper}>
                                <Typography className={classes.typography} variant="subtitle2">{place.name}</Typography>
                            <img 
                            className={classes.pointer}
                            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                            alt={place.name}
                            
                            
                            />
                           
                            </Paper>
                    )
                }
                

            </div>
        ))}

        
        </GoogleMapReact>
    </div>
// bootstrapURLKeys key from google maps, got from google developers console.
// Remember to sign in for google cloud for Google Maps API
   );
}

export default Map;
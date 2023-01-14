# Resturants
![Img for Git](https://user-images.githubusercontent.com/120285761/210051096-5c59158f-95fa-4c5f-ae73-3f94eb0b1079.png)





# Usage 

React Native web app made with Expo framework that allows you to view resturants, hotels and attractions around you, showing prices, contact details, ranking, and link to travel advisor and their respective website.
![Git pic 2](https://user-images.githubusercontent.com/120285761/210051131-cd94b783-2461-4a85-80b7-f0b0f55efe3d.png)


Get the users location when permission is given

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


![Git pic 3](https://user-images.githubusercontent.com/120285761/210051156-24cebac2-46ac-4b43-b160-c50f772016d3.png)


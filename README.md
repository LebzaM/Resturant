# Resturants
![image](https://user-images.githubusercontent.com/120285761/209970547-d35e3fea-20c0-4d3a-a54f-13c2cd48f97c.png)




# Usage 

React Native web app made with Expo framework that allows you to view resturants around you, showing prices, contact details, ranking, and link to travel advisor and the resturants website.
![image](https://user-images.githubusercontent.com/120285761/209971089-538288db-c6bb-4c23-bcc2-8279d017e78e.png)

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


![image](https://user-images.githubusercontent.com/120285761/209972234-e8805433-d7b8-4de7-a1f4-4ea29f32f25e.png)

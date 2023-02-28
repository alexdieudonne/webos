type pos = {
    coords: {
        latitude: number,
        longitude: number
    }
}

type err = {
    code: number,
    message: string
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos: pos) {
    const crd = pos.coords;
    
    const key = "ee49d77f8390918fc5dc719252e12c19";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${key}&units=metric`;


    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const { main, name, weather} = data;
        const { temp } = main;
        const { icon } = weather[0];
        const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
       

        const weatherIcon = document.querySelector('.weather-icon');
        if (weatherIcon)
            weatherIcon.setAttribute('src', iconUrl);
       
        document.querySelector('.weather-temp')!.textContent = Math.ceil(temp) + '°C';
        const city =  name.split(' ')[0];
        document.querySelector('.weather-location')!.textContent = city;
    
        
    }
    );
   
  
  }

  function error(err: err) {
    console.log(`ERROR(${err.code}): ${err.message}`);
  }
  

  
//get the position via ipapi https://ipapi.co/json/
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
      const { latitude, longitude } = data;
      success({coords: {latitude, longitude}});
  });


  
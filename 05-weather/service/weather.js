const axios = require('axios');

const appId = "0c4b5ef67595053f0fe19b714b7c8682";
const units = "metric";

const getWeather = async( lat, lng ) => {

    var instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appId}&units=metric`,
        timeout:  2000
    });
    
    
    const resp = await instance.get();

    //console.log('resp', resp);

    if ( resp === 0 ){
        throw new Error (`Data not found for ${city}`)
    }
    const data = resp.data;
    const name = data.name;
    const weather = data.weather;
    const temp = data.main.temp;
        

      return {
          name,
          weather,
          temp
      }  

    }

module.exports = {
    getWeather
}

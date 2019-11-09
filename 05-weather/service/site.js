const axios = require('axios');

const getSite = async( city ) => {

    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${city}`,
        timeout:  1000,
        headers: {
            'x-rapidapi-host' : 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key' : 'da93ec99eemsh7c500ea58b2b1adp1674bcjsne644e1dbc9e9'
        }
    });

    const resp = await instance.get();
      

    

    if ( resp.data.Results.length === 0 ){
        throw new Error (`Data not found for ${city}`)
    }
    const data = resp.data.Results[0];
    const site = data.name;
    const lat = data.lat;
    const lng = data.lon;
        

      return {
          city,
          lat,
          lng
      }  

    }

module.exports = {
    getSite
}

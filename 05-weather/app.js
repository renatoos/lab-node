
const argv = require('./config/yargs').argv;
const site = require('./service/site');
const weather = require('./service/weather');

console.log('argv2', argv);

const city = argv.city;

const getInfo =  async (city) => {
    try {
        const coords = await site.getSite(city);
        const temp = await weather.getWeather(coords.lat, coords.lng);
        return `The weather to ${city} is ${temp.temp}`;

    }
    catch (err){
        return `Failed to get the weather to ${city}: ${err}`;
    }
}


getInfo(city)
    .then( console.log)
    .catch(console.log)

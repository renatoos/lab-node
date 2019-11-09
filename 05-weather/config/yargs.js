const argv = require('yargs').options({
    city : {
        alias: 'c',
        desc: 'City address/name to get the weather',
        demand: true,
    }
}).argv;

console.log(argv);

module.exports = {
    argv
}

const opts = 
    {
        base: {
            demand: true,
            alias: 'b'
        },
        limit: {
            alias: 'l',
            default: '10'
        }    
    }
;

const argv = require('yargs')
.command('list', 'Print in console a multiply table', opts)
.command('create', 'Create a multiply table', opts)
.help()
.argv;

module.exports = {
    argv
}

const argv = require('yargs')
    .command('list', 'Print in console a multiply table', {
        base: {
            demand: true,
            alias: 'b'
        },
        limit: {
            alias: 'l',
            default: '10'
        }
    })
    .command('create', 'Create a multiply table', {
            base: {
                demand: true,
                alias: 'b'
            },
            limit: {
                alias: 'l',
                default: '10'
            }    
    })
    .help()
    .argv;

const multiply = require('./multiply/multiply');

let command = argv._[0];

    switch(command){
        case 'create':
            multiply.createFile(argv.base, argv.limit)
                .then(file => console.log(`File has been created: ${file}`))
                .catch(e => console.log('object', e));

            break;

        case 'list':
            multiply.listTable(argv.base, argv.limit) 
               
            break;

        default: 
            console.log('Command not found');
    }


// let base = "abc";

//console.log('Module', module);
//console.log(process);
// console.log('process.arqv', process.argv);


console.log('argv', argv);

// let argv2 = process.argv;
// console.log('argv2', argv2);
// let param = arqv[2];
// let base = param.split("=")[1];
//console.log('param', param);



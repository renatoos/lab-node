
const colors = require('colors');
const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');

//console.log('argv', argv);

let command = argv._[0];

switch (command) {
    case 'create' : 

        let task = todo.create(argv.description);
        console.log(`Create a task ${task.description}`);
        break;

    case 'list' : 
        let listTodo = todo.list();
        console.log('listTodo', listTodo);
        console.log('======== TODO List ========='.green);
        listTodo.forEach(item => {
            console.log(`Task: ${item.description} : Status ${item.complete}`);    
        });
                
        console.log('======================'.green);
        break;

    case 'update' :
        let updated = todo.update(argv.description, argv.complete);
        console.log(`Update a task: ${updated}`); 
        break;
    
    case 'delete' :
        let deleted = todo.remove(argv.description);
        console.log(`Delete a task: ${deleted}`); 
    default:
        console.log('Command not found');
}

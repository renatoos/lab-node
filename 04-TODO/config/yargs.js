const description = {
    demand: true,
    alias: 'd',
    description: 'Describe the task to do'
}

const complete = {
    demand: false,
    type: 'boolean',
    alias: 'c',
    description: 'Define if it is completed'
}


const argv = require('yargs')
    .command('list', 'List all todo tasks', 
        {   
            limit: {
                demand: false,
                alias: 'l',
                description: 'Define the number of task to list',
                default: 3
            }

        })
    .command('create', 'Create a todo task', 
    {   
        description,
        complete
    })
    .command('update', 'Update a todo task', 
    {   
        description,
        complete
    })
    .command('delete', 'Delete a todo task', 
    {   
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}
const fs = require('fs');
const colors = require('colors');

let listTodo = [];

const storeDB = () => {
    let data = JSON.stringify( listTodo );

    fs.writeFile('./db/data.json', data, (err) => {
    if (err) throw err;
    //console.log('The file has been saved!');
    });
}

const loadDB = () => {
    
    try{
        listTodo = require('../db/data.json');    
    }catch(e){
        listTodo = [];
    }
    //console.log('listTodo', listTodo);
}
    

const create = (description) => {

    loadDB();

    let todo ={
        description,
        complete: false
    };

    listTodo.push (todo);

    storeDB();

    return todo;
}

const list = () => {
    listTodo == loadDB();

    return listTodo;
}

const update = (description, complete = true) => {
    
    loadDB();

    let index = listTodo.findIndex( task =>{
        return task.description === description;
    })

    if (index >=0 ) {
        listTodo[index].complete = complete;
        storeDB();
        return true;
    }else{
        return false;
    }
}

const remove = ( description ) => {
    
    loadDB();
    console.log('listTodo', listTodo)
    console.log('description', description)

    let index = listTodo.findIndex( task =>{
        return task.description === description;
    })

    console.log('index', index);
    if (index >=0 ) {
        listTodo.splice(index,index);
        storeDB();
        return true;
    }else{
        return false;
    }
}

module.exports = {
    create,
    list,
    update,
    remove
}
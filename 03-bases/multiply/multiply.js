const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit = 10) => {
    for( let i = 1 ; i <= limit ; i++){
        console.log('-'.green)
        console.log(`${base} * ${i} = ${base * i}` ); 
        // data +=  `${base} * ${i} = ${base * i}\n`;
    }
}

let createFile = (base, limit) => {

    return new Promise( (resolve,reject) => {

        if (!Number(base)){
            reject(`${base} is not a number`);
            return;
        }

        if (!Number(limit)){
            reject(`${limit} is not a number`);
            return;
        }

        let data = '';

        for( let i = 1 ; i <= limit ; i++){
            console.log(`${base} * ${i} = ${base * i}` ); 
            data +=  `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tables/table-${base}-to-${limit}.txt`, data, (err) => {
            if(err) reject  (err)
            else
                resolve(`table-${base}-to-${limit}.txt`)
        });

  });
}

module.exports = {
    createFile,
    listTable
}

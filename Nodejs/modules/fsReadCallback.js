const fs = require('fs');

fs.readFile('./sample.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data) 
    console.log(data.toString())
})



fs.promises.readFile('./sample.txt')
    .then((data)=> {
        console.log(data);
        console.log(data.toString())
    }).catch((err)=> {
        console.error(err)
    })
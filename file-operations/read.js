let fs = require('fs');

fs.writeFile('./data.txt', "hello anudeep, welcome to node js", (err, ) => {

    if (err) {
        console.log("error reading ");
    } else {
        console.log("file written succesfully");
    }



});
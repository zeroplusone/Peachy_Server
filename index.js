const express = require('express')

const PORT = process.env.PORT || 5000
var fs = require("fs");

express()
    .get('/listUsers', function(req, res) {
        fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
            console.log(data);
            res.end(data);
        });
    })
    .get('/', (req, res) => res.end("Peachy API! try /listusers/"))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
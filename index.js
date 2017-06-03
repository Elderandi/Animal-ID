const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.get('/api/hello', function(req, res){
    res.status(200).send('OK');
})

app.listen(port, console.log("Listening on ", port));
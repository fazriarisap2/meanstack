const express = require('express');
const app = express();
const path = require('path');
const mongoose  = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise
mongoose.connect(config.uri,(err) => {
    if (err) {
        console.log('could not connect to database',err)
    } else {
        console.log('connected to database'+config.db)
    }
});


app.use(express.static(__dirname + '/client/dist/client'));

app.get('*', (req, res, next)=>{
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
})

app.set('port', process.env.port || 3000) 

app.get('/', (req, res, next) =>{
    res.send('<h1>Hello world<h1>');
})

app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})
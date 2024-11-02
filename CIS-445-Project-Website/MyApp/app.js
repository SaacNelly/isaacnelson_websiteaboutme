const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..')));

app.get('/', function(req, res) {
    
    res.sendFile(path.join(__dirname, '..', 'profile.html'));
});

app.listen(8080, function() {
    console.log('App listening on port 8080!');
});

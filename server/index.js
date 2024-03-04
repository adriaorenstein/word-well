const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db');

const app = express();

const public_path = path.resolve(__dirname + '/../public/') + '/';

const port = process.env.PORT || 8080;

app.use(express.static(public_path));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', require('./api'));

app.get('/', function(req, res) {
    res.sendFile(public_path + 'index.html');
});

app.get('*', function(req,res) {
    res.sendFile(public_path + 'index.html');
});

db.sync().then(() => {
    console.log('Database synced');
    app.listen(port);
    console.log('Server started at http://localhost:' + port);
});
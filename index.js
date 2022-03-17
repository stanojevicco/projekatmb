const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var jquery = require('jquery');
app.use(express.static('public'));


app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
;
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})


app.listen(5000);

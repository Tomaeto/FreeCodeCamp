require('dotenv').config()
let express = require('express');
let app = express();
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');


app.use("/public", express.static(__dirname + "/public"));
app.use(function middleware(req, res, next) {
    var str = req.method + " " + req.path + " - " + req.ip;
    console.log(str);
    next();
});
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
})

app.get('/json', function(req, res) {
    if (process.env.MESSAGE_STYLE == 'uppercase')
    res.json({"message": "HELLO JSON"});
    else   
        res.json({"message": "Hello json"});
})




































 module.exports = app;

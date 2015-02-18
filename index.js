'use strict';

var acatiris = require('acatiris'),
    express = require("express"),
    app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.use('/ascii', acatiris.endpoint);

app.get('/', function(req, res, next){
    res.body = 'hit me up <a href="https://twitter.com/lsvx">@lsvx</a><img src="http://o-dub.com/images/rapcat.jpg?width=100"/>';
    next();
});

app.use(acatiris);

module.exports = app;

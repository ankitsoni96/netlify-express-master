'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const user = require('./api/v1/controllers/user')
const router = express.Router();
const DB = require('./api/utils/db');

// router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
// router.post('/', (req, res) => res.json({ postBody: req.body }));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



router.post('/register',user.register);
// router.post('/login',user.getUsers);
// router.post('/search',user.getUsers);
// router.get('/logout',user.getUsers);


DB.connect()

app.use('/.netlify/functions/server', router);  // path must route to lambda
// app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

module.exports = app;
module.exports.handler = serverless(app);

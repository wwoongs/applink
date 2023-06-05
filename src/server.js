const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});
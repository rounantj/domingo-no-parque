
const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 3000;

var key = fs.readFileSync(__dirname + '/certs/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/certs/selfsigned.crt');
var options = {
  key: key,
  cert: cert
};

app = express()
app.get('/', (req, res) => {
   res.sendFile(__dirname+'/index.html');
});

app.get('/model', (req, res) => {
    res.sendFile(__dirname+'/public/model.gltf');
 });

var server = https.createServer(options, app);
app.use(express. static ( 'public' ));
server.listen(port, () => {
  console.log("server starting on port : " + port)
});
 
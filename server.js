const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', function(req, res) {
  res.sendFile('/JS/WebAR/test.html');
});

app.get('/marker', function(req, res) {
  res.sendFile('/JS/WebAR/markerTrack.html');
});

app.get('/backup', function(req, res) {
  res.sendFile('/JS/WebAR/backup.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://192.168.100.2:${port}`)
})
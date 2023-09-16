require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dns = require('dns');
const bodyParser = require('body-parser');
const { isValid } = require('mongodb/lib/core/topologies/read_preference');
// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

let urls = [];
app.post('/api/shorturl', (req, res) => {
  let url = new URL(req.body.url)
  if (url.protocol != "http:" && url.protocol != "https:") {
    res.json({error: 'invalid url'});
    return;
  }
  dns.lookup(url.hostname, function(err, address, family) {
    if (err) {
      console.log(error)
      res.json({error: 'invalid url'})
    }
    if (!urls.includes(url.href)) urls.push(url.href);
    res.json({ original_url: url.href, short_url: urls.indexOf(req.body.url)});
  })
});

app.get('/api/shorturl/:id', (req, res) => {
  if (req.params.id == 'undefined') return;
  let extUrl = urls[req.params.id];
  res.redirect(extUrl);
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

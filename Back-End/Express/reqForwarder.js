
// @author Nida Dinç
// I have used express to avoid CORS error

const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/iot/updatedData', (req, res) => {
  request(
    { url: 'http://192.168.1.21:5000' , body:"{}", headers: {
        'Access-Control-Allow-Origin': '*',
        'Connection': 'keep-alive',
        'Origin': 'http://192.168.1.21:5000',
        'Referer': 'http://192.168.1.21:5000/',
        'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
      }
    },
     (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500);
        // If an error generates try again
        request();
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));


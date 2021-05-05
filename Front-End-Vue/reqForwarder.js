
const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/acs/updatedData', (req, res) => {
  request(
    { url: 'http://91.93.3.119/lua/api' , body:"{\"currData\":1,\"alarms\":1}", headers: {
        'Access-Control-Allow-Origin': '*',
        'Connection': 'keep-alive',
        'Origin': 'http://91.93.3.119',
        'Referer': 'http://91.93.3.119/',
        'Accept-Language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
        'Cookie': 'username=%61%72%61%6e%65%74%73%65%72%76%69%63%65; SID=%7b%22%67%22%3a%22%61%64%6d%69%6e%22%2c%22%68%22%3a%22%38%32%38%62%65%30%65%37%66%32%39%64%39%62%36%64%30%39%31%36%35%39%38%63%33%34%39%35%35%38%65%37%30%39%37%33%64%34%37%33%34%33%62%36%30%62%36%31%62%33%62%62%65%64%34%61%36%39%64%39%36%32%38%35%22%2c%22%69%22%3a%22%31%37%36%2e%32%33%32%2e%31%32%32%2e%31%22%2c%22%73%22%3a%22%42%33%43%32%35%32%44%34%34%43%32%35%41%32%31%34%39%32%44%43%43%41%37%30%43%41%44%44%36%35%36%46%22%2c%22%75%22%3a%22%61%72%61%6e%65%74%73%65%72%76%69%63%65%22%7d%8d%36%b1%09%92%12%57%8e%a2%cd%25%b0%38%05%8c%0b%26%40%dc%b8%bb%c2%22%cb%5c%d3%b5%5f%8b%00%8b%7b%cc%d8%10%f7%09%3d%a0%be%3f%c2%ad%21%b2%8e%da%3a%35%5b%95%85%af%44%f2%37%f9%ad%fb%4a%aa%22%f3%0e%9d%88%29%c7%2d%ce%86%70%e3%74%82%95%ac%b3%a9%4b%6d%08%7c%8a%57%80%09%0e%1a%0c%ee%e4%c1%b4%93%be%1c%e7%9d%f8%6c%43%e9%81%0d%9a%64%5d%0d%6d%da%04%22%d3%46%19%5a%7b%9b%7d%5d%73%9c%4d%fb%37%79%76%ee%6c%2a%4f%f1%0c%ef%2b%8d%11%6d%fc%1e%35%dc%9e%2b%4b%10%39%4b%2f%c4%fa%2c%40%e1%fe%68%fe%db%2e%99%50%1a%88%fa%4f%ce%7c%ac%56%77%45%c5%4f%18%82%38%5d%ae%b6%e4%84%d3%fb%a5%81%59%12%6d%a2%b2%39%e2%66%97%30%91%c9%01%d2%4a%22%a2%69%1d%09%21%0d%4d%cf%fd%46%1a%8f%25%3f%1b%1a%d7%28%4f%75%28%d0%94%ec%b2%ca%05%ab%70%cf%b5%7e%2e%d2%a3%11%f1%b2%4e%65%c9%4f%3f%ef%e0%a2%fa%8b%e8%19%d2%9e%80%f2; group=%61%64%6d%69%6e'  },
    },
     (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));


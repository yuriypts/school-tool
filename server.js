const express = require('express');

const app = express();
const root = 'dist/school-tool';

app.use(express.static('./dist/school-tool'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root });
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)

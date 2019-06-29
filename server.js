const express = require('express');
const app = express();
const port = 3000;
const serverIp = '192.168.43.119:8000';
const myId = 1;

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>
    res.sendfile('index.html')
);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


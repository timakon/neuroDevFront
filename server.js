const express = require('express');
const app = express();
const port = 3000;
const serverIp = '192.168.43.119:8000';
const myId = 1;
const fetch = require('node-fetch');

let dataEvaluatedUsers;
let dataNewRecommendations;
let dataUserInfo;

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
fetch(`http://${serverIp}/eval/get/${myId}`, {mode: 'cors'})
    .then((response) => response.json())
    .then((response) => {
        dataEvaluatedUsers = response.message.contacts;
    })
    .catch((error) => {
        console.log(error);
    });

fetch(`http://${serverIp}/recommendation/new/${myId}`, {mode: 'cors'})
    .then((response) => response.json())
    .then((response) => {
        dataNewRecommendations = response.message.recommendations;
    })
    .catch((error) => {
        console.log(error);
    });

fetch(`http://${serverIp}/user/get/${myId}`, {mode: 'cors'})
    .then((response) => response.json())
    .then((response) => {
        console.log(response.message);
        dataUserInfo = response.message;
    })
    .catch((error) => {
        console.log(error);
    });

app.get('/', (req, res) => res.render('index', {
    dataEvaluatedUsers: dataEvaluatedUsers,
    dataNewRecommendations: dataNewRecommendations,
    dataUserInfo: dataUserInfo,
    })
);

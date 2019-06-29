const express = require('express');
const app = express();
const port = 3000;
const serverIp = '192.168.43.119:8000';
const myId = 1;
const fetch = require('node-fetch');

let dataEvaluatedUsers;
let dataNewRecommendations;

app.use('/public', express.static('public'));

app.set('view engine', 'ejs');

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
fetch(`http://${serverIp}/eval/get/${myId}`, {mode: 'cors'})
    .then((response) => response.json())
    .then((response) => {
        console.log(response.message);
        dataEvaluatedUsers = response.message.contacts;
    })
    .catch((error) => {
        console.log(error);
    });

fetch(`http://${serverIp}/recommendation/new/${myId}`, {mode: 'cors'})
    .then((response) => response.json())
    .then((response) => {
        console.log(response.message.recommendations);
        dataNewRecommendations = response.message.recommendations;
    })
    .catch((error) => {
        console.log(error);
    });

fetch(`http://${serverIp}/eval/send/`, {
    mode: 'cors',
    method: 'post',
    data: {
        "uid": 2,
        "evaluator": myId,
        "date": "2016-07-25",
        "partnership": 3,
        "joint": 3,
        "responsibility": 3,
        "kindness": 3,
        "trust": 3,
        "anger": 3,
        "irritability": 3,
        "compliance": 3,
        "sociopathy": 3,
        "isolation": 3
    },
})
    .then((response) => response.json())
    .then((response) => {
        console.log(response.status);
    })
    .catch((error) => {
        console.log(error);
    });

app.get('/', (req, res) => res.render('index', {dataEvaluatedUsers: dataEvaluatedUsers, dataNewRecommendations: dataNewRecommendations})
);

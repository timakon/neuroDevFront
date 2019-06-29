const serverIp = '192.168.43.119:8000';
const myId = 1;

$(document).on('input', '.slider', function () {
   $(this).siblings('p').html($(this).val());
});
let check = true;
$(document).on('click','.user_evaluated',(e) => {
    const target = e.currentTarget;
    check ? $('.sidebar').css('width', '40%') : $('.sidebar').css('width', '0');
    check = !check;
    console.log(target);
});

fetch(`http://${serverIp}/eval/get/${myId}`, {mode: 'cors'})
    .then((response) => response.json())
    .then((response) => {
        console.log(response.message);
        const data = response.message.contacts;
        data.map((user) => {
            const {name, surname, uid} = user;
            console.log(name, surname, uid);
        });
    })
    .catch((error) => {
        console.log(error);
    });

fetch(`http://${serverIp}/recommendation/new/${myId}`, {mode: 'cors'})
    .then((response) => response.json())
    .then((response) => {
        console.log(response.message.recommendations);
        const data = response.message.recommendations;
        data.map((recommendation) => {
            const {text} = recommendation;
            console.log(text);
        });
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

return

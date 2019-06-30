const serverIp = '192.168.43.119:8000';
const myId = 1;

$(document).on('input', '.slider', function () {
   $(this).siblings('.value').html($(this).val());
});
let check = false;
let uid;
let uidToServer;
$(document).on('click','.user_evaluated',function (e) {
    $(e.currentTarget).addClass('checked').siblings().removeClass('checked');
    if (check===false){
        uid = $(e.currentTarget).attr('id');
        $('.sidebar').css('width', '40%');
        $('.slider').val('0');
    }
    if (uid !==$(e.currentTarget).attr('id')){
        $('.value').html('0');
        $('.sidebar').css('width', '40%');
        $('.slider').val('0');
        uid = $(e.currentTarget).attr('id');
    }
    check = true;
});

$(document).on('click','.submitButton',function (e) {
    e.preventDefault();
    uidToServer = uid;
    $('.uidToServer').val(uidToServer);
    const data = $('input').serializeArray();
    const trueData = {};
    data.map((item) => {
        trueData[item.name] = item.value;
    });
    trueData['evaluator'] = myId.toString();

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    const year = date.getFullYear();
    if (day <= 9) day = '0' + day;
    if (month <= 9) month = '0' + month;

    trueData['date'] = year + '-' + month + '-' + day;

    const dataJson = JSON.stringify(trueData);
    fetch(`http://${serverIp}/eval/send/`, {
        mode: 'cors',
        method: 'post',
        body: dataJson,
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response.status);
        })
        .catch((error) => {
            console.log(error);
        });
    $(`#${uid}`).remove();
    $('.sidebar').css('width', '0');
});

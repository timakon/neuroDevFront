const serverIp = '192.168.43.119:8000';
const myId = 1;

$(document).on('input', '.slider', function () {
   $(this).siblings('.value').html($(this).val());
});
let check = false;
let uid;
let uidToServer = document.getElementsByClassName('uidToServer');
$(document).on('click','.user_evaluated',function (e) {

;    if(check===false){
       uid = $(e.currentTarget).attr('id');
       $('.sidebar').css('width', '40%');
        $('.slider').val('0');
     }
    if(uid !==$(e.currentTarget).attr('id')){
        $('.value').html('0');
        $('.sidebar').css('width', '40%');
        $('.slider').val('0');
        uid = $(e.currentTarget).attr('id');
    }
    check = true;
});

    $(document).on('click','.submitButton',function (e) {
        e.preventDefault();
        uidToServer = uid;         //uidToServer id кнопки
        $(`#${uid}`).remove()
        $('.sidebar').css('width', '0');
    })

const serverIp = '192.168.43.119:8000';
const myId = 1;

$(document).on('input', '.slider', function () {
   $(this).siblings('.value').html($(this).val());
});
let check = true;
$(document).on('click','.user_evaluated',(e) => {
    const target = e.currentTarget;
    check ? $('.sidebar').css('width', '40%') : $('.sidebar').css('width', '0');
    check = !check;
    console.log(target);
});

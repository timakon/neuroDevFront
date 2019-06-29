const serverIp = '10.0.0.118:8000';

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

fetch(`http://${serverIp}/eval/get`, {mode: 'cors'})
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const {name, surname} = data;
        console.log(name, surname);
        console.log('ok');
    })
    .catch((error) => {
        console.log(error);
    });

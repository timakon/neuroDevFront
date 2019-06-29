$(document).on('input', '.slider', function () {
   $(this).siblings('p').html($(this).val());
});
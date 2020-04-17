$(function () {
    $('.secretForm').fadeOut();
    $('.close').on('click',function () {
        $('.top').fadeOut();
    })
    $('.show').on('click',function () {
        
        $('.secretForm').fadeToggle(1000);
    })
   
    $('.contentSecond').hide();

    $(window).resize(function(){

// let screen =$('body').width();
// if (screen <= 575) {
//     $('.contentSecond').show();
//     $('.top').hide();
// }
// else{
//     $('.content').hide();
//     $('.top').show();
// }

    });
})
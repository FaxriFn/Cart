$(function () {
    
 
function getSearch() {
  
  $('.searchSubmit').on('click', function() {
    var searchVal = $('.searchField').val();
    var filterItems = $('.contentRightContent');

  // if(searchVal == " "){
  //   $('.zeroDoctor').addClass('d-none');
  // }
    if ( searchVal != '' ) {
      filterItems.addClass('hidden');
      $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
      return;
    } else {
      // filterItems.addClass('hidden');
  // $('.zeroDoctor').removeClass('d-none');
    }
  });
}
getSearch();

$( function() {
    $( "#datepicker" ).datepicker({
        showWeek: true,
        firstDay: 1
    });
  } );
  $('.modalFindDoctor').hide();
  
  $('.modalClick').on('click',function () {
     
    // $('.displayNone').slideDown(1000);
    $('.modalFindDoctor').fadeIn();
    $('.modalFindDoctor').fadeIn("slow");
    $('.modalFindDoctor').fadeIn(3000);


      $('body').css("overflow","hidden")
  })




  $('.circle').on('click',function () {

    $('.modalFindDoctor').fadeToggle();

    $('body').css("overflow","inital")
    $('body').css("overflow","auto")
  })

  
  AOS.init();

$('.searchSubmit').on('click',function () {
  $(".preloader").css('display','block')
  $('.preloader').delay(3000).fadeOut(1000);

if ($('.departmentSearch').val() == ' '   ) {
  
  $('.urology').fadeIn();
  $('.urology').fadeIn(300);
  $('.urology').fadeIn("show");
  $('.pulmonary').fadeIn();
  $('.dental-clinic').fadeIn();
  $('.prthopaedics').fadeIn();
  $('.neurology').fadeIn();
}
if ($('.departmentSearch').val() == 'urology' ) {
  $('.contentRightContent').removeClass('hidden');
  $('.urology').fadeIn();
  $('.urology').fadeIn(300);
  $('.urology').fadeIn("show");
  $('.pulmonary').hide();
  $('.dental-clinic').hide();
  $('.prthopaedics').hide();
  $('.neurology').hide();
}
if ($('.departmentSearch').val() == 'pulmonary'  ) {

  $('.pulmonary').fadeIn();
  $('.pulmonary').fadeIn(300);
  $('.pulmonary').fadeIn("show");
  $('.urology').hide();
  $('.dental-clinic').hide();
  $('.prthopaedics').hide();
  $('.neurology').hide();
}
 if ($('.departmentSearch').val() == 'dental-clinic'   ) {
  
  $('.dental-clinic').fadeIn();
  $('.dental-clinic').fadeIn(300);
  $('.dental-clinic').fadeIn("show");
  $('.pulmonary').hide();
  $('.urology').hide();
  $('.dental-clinic').hide();
  $('.prthopaedics').hide();
  $('.neurology').hide();
}
  if ($('.departmentSearch').val() == 'prthopaedics'   ) {
  
  $('.prthopaedics').fadeIn();
  $('.prthopaedics').fadeIn(300);
  $('.prthopaedics').fadeIn("show");
  $('.pulmonary').hide();
  $('.urology').hide();
  $('.dental-clinic').hide();
  $('.prthopaedics').hide();
  $('.neurology').hide();
  $('.dental-clinic').hide();
}
})

})
$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});
$('#carouselExampleIndicators').carousel({
    interval: 3000,
    pause: null
  })
  $(".left").click(function(){
    $("#carouselExampleIndicators").carousel("prev");
  });
  $(".right").click(function(){
    $("#carouselExampleIndicators").carousel("next");
  });


  //mobile navbar button animation

  $(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });
  // contact
  $('.contact-form').find('.form-control').each(function() {
    var targetItem = $(this).parent();
    if ($(this).val()) {
      $(targetItem).find('label').css({
        'top': '10px',
        'fontSize': '14px'
      });
    }
  })
  $('.contact-form').find('.form-control').focus(function() {
    $(this).parent('.input-block').addClass('focus');
    $(this).parent().find('label').animate({
      'top': '10px',
      'fontSize': '14px'
    }, 300);
  })
  $('.contact-form').find('.form-control').blur(function() {
    if ($(this).val().length == 0) {
      $(this).parent('.input-block').removeClass('focus');
      $(this).parent().find('label').animate({
        'top': '25px',
        'fontSize': '18px'
      }, 300);
    }
  })
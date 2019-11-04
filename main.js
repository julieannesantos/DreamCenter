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
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

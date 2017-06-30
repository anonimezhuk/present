$(document).ready(function(){
  $('body').css(
    'height', $(window).height()-20+'px'
  );
  var prevColor = '#ffffff';
  $('.slider').slick({
    slidesToShow: 1,
    autoplay: false,
    arrows: false,
    infinite: false
  });
  $('.slider').on('swipe', function(){
    var color = $('.slick-active').data('color');
    console.log(prevColor);
    $('body').css(
      'background', 
      "linear-gradient(to top left, "+prevColor+","+color+") no-repeat",
      
    );
    prevColor = color;
    console.log(color);
  });
});
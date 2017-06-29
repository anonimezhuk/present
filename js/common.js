$('.presents img').on('click', function(){
  var step = parseInt($(this).data('step'));
  $('*[data-step ='+ step +']').hide();
  $('*[data-step ='+ (step + 1) +']').show();
});




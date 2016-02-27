$('#go-next').click(function(){
	$.scrollTo($('.about-eshun'), 1000);
});

$('#li-about-eshun').click(function(){
	$.scrollTo($('.about-eshun'), 1000);
});

$('#li-skills-eshun').click(function(){
	$.scrollTo($('.skills-eshun'), 1000);
});

$('#li-contact-eshun').click(function(){
	$.scrollTo($('.contact-eshun'), 1000);
});

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.about-eshun');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top - 52) {
          $('.navbar-eshun').css('background', 'rgba(12, 32, 75, 0.95)');
       } else {
          $('.navbar-eshun').css('background-color', 'rgba(12, 32, 75, 0.1)');
       }
   });
});
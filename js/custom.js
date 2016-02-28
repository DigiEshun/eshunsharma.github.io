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

$('.navbar-brand').click(function(){
	$.scrollTo({'top':0,'left':0}, 1000);
});

$(document).ready(function(){   

	jQuery.scrollSpeed(100, 1000);

   	var scroll_start = 0;
   	var startchange3 = $('.about-eshun');
   	var offset3 = startchange3.offset();
   	$(document).scroll(function() { 
      	scroll_start = $(this).scrollTop();
      	
      	if(scroll_start > offset3.top - 52) 
      	{
          	$('.navbar-eshun').css('background', 'rgba(12, 32, 75, 0.95)');
      	} 
       	else 
       	{
        	$('.navbar-eshun').css('background-color', 'rgba(12, 32, 75, 0.1)');
        	$('.navbar-eshun').css('border-color', 'rgba(255, 255, 255, 0.45)');
       	}
   });
});
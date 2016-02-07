$(function(){

	// Logo Animation 
	$('ul#navlogo').on('mouseover',function(){
		$(this).addClass('animated tada');
	});
	$('ul#navlogo').on('mouseout',function(){
		$(this).removeClass('animated tada');
	});

	// ScrollTo calls
	$('a.learn-more').on('click',function(e){
		e.preventDefault();
		$('section.first').ScrollTo();
	});
});
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

	// Control of testimony pictures
	$('div#testimony-pictures img').on('mouseover',function(){
		if(!$(this).hasClass('selected')){
			var id=$(this).attr('id');
			$('div#testimony-pictures img').removeClass('selected');
			$('div#testimony-content img').attr('src','/assets/img/ref-big-'+id+'.jpg');
			$('div#testimony-content p').hide();
			$('div#testimony-content p#text-'+id).fadeIn();
			$(this).addClass('selected');
		}
		
	});
});
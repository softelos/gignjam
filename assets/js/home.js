$(function(){

	const headerTriggerPos=50;

	// Start up
	updateBanner();
	checkNavSize($(window).width());

	// When the main window changes size
	$(window).resize(function(){
		// Hide mini menu in case it was visible
		$('div#minimenubox').hide();
		// Update banner
		updateBanner();
		checkNavSize($(window).width());
	});

	// When the window scrolls
	$(window).scroll(function(){
		var vPos=$(this).scrollTop();
		// Hide mini menu in case it was visible
		$('div#minimenubox').hide();
		if(vPos>headerTriggerPos){
			$('header').removeClass('expanded');
			$('header').addClass('collapsed');
		}else{
			$('header').removeClass('collapsed');
			$('header').addClass('expanded');
		}
	});


	// Set right size for banner
	function updateBanner(){	
		$('div#banner').css('width',window.innerWidth);
		$('div#banner').css('height',parseInt(window.innerWidth/1.778)); // Image used is 1366px x 768px 
	}

	// Checks the nav width, if small, shows the small menu button
	function checkNavSize(width){
		var isHome=$('header').hasClass('home');
		if(!isHome){
			if(width<1200){
				$('ul#menu').hide();
				$('ul#usermenu').hide();
				$('ul#minimenu').show();
			}else{
				$('ul#menu').show();
				$('ul#usermenu').show();
				$('ul#minimenu').hide();			
			}
		}else{
			$('ul#menu').hide();
			$('ul#usermenu').hide();
			$('ul#minimenu').show();			
		}
	}


	// Mini menu link clicked
	$('ul#minimenu').on('click',function(e){
		var pos=$(this).position();
		var menu=$('div#minimenubox');
		menu.css('left',pos.left-menu.width());
		menu.css('top',pos.top+40);
		menu.slideToggle('fast');
	});

	$('div#minimenupullbutton div#button').on('click',function(){
		var menu=$('div#minimenubox');
		menu.slideToggle('fast');
	});

	$('div#banner').on('click',function(){
		// Hide mini menu in case it was visible
		$('div#minimenubox').hide();
	});

	$('div.flip').flip({
		trigger:'hover'
	});

});
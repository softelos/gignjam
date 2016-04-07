$(function(){

	const headerTriggerPos=50;

	var mobileWindowHeight=window.innerHeight;

	// Start up
	updateBanner();
	updateExplorePictures();
	checkNavSize($(window).width());

	// When the main window changes size
	$(window).resize(function(){
		// Hide mini menu in case it was visible
		$('div#minimenubox').hide();
		// Update banner
		//updateBanner();
		updateExplorePictures();
		checkNavSize($(window).width());
	});

	// When the window scrolls
	$(window).scroll(function(){
		var vPos=$(this).scrollTop();
		// Hide mini menu in case it was visible
		$('div#minimenubox').hide();
		if(!$('header').hasClass('misc')){
			if(vPos>headerTriggerPos){
				$('header').removeClass('expanded');
				$('header').addClass('collapsed');
			}else{
				$('header').removeClass('collapsed');
				$('header').addClass('expanded');
			}
		}
	});


	// Set right size for banner
	function updateBanner(){	
		var vOffset=$('header').height()+150;
		if(window.innerHeight>768) vOffset+=window.innerHeight-768;
		//$('div#banner').css('width',parseInt(window.innerWidth));
		//$('div#banner').css('height',(parseInt(window.outerHeight)+vOffset)*0.3);

		$('div#banner').css('width','100%');

		if(window.innerHeight>600){
			if($('div#banner').hasClass('home')){
				$('div#banner').css('height',(parseInt(window.outerHeight))-450);
			}else{
				if($('div#banner').hasClass('misc')){
					$('div#banner').css('height',400);
				}else{
					$('div#banner').css('height',(parseInt(window.outerHeight))-320);
				}
			}
		}else{
			$('div#banner').css('height',mobileWindowHeight);
		}

		var textHeight=parseInt($('div#banner div#text').innerHeight())-parseInt($('div#banner div#text').css('padding-top'))-parseInt($('div#banner div#text').css('padding-bottom')),
			bannerHeight=parseInt($('div#banner').innerHeight());

		$('div#banner div#text').css('padding-top',(bannerHeight/2)-(textHeight/2));
	}

	function updateExplorePictures(){
		$('div.explore div.item').each(function(){
			var boxHeight=parseInt($(this).outerHeight());
			var textHeight=parseInt($(this).find('p:first').outerHeight());
			var padding=(boxHeight-textHeight)/2;
			$(this).css('padding-top',padding);
		});
	}

	// Fans, events
	$('div.events div.item').on('mouseover',function(){
		$(this).find('div.text:first').removeClass('off');
		$(this).find('div.text:first').addClass('on');
	});
	$('div.events div.item').on('mouseleave',function(){
		$(this).find('div.text:first').removeClass('on');
		$(this).find('div.text:first').addClass('off');
	});

	// Fans, talents
	$('div.talents div.item').on('mouseover',function(){
		$(this).find('div.text:first').removeClass('off');
		$(this).find('div.text:first').addClass('on');
	});
	$('div.talents div.item').on('mouseleave',function(){
		$(this).find('div.text:first').removeClass('on');
		$(this).find('div.text:first').addClass('off');
	});


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
				$('ul#minimenu').show();			
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
		menu.css('top',pos.top+55);
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
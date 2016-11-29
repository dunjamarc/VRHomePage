var main = function (){
	var toggle = function(selector1, selector2){
		$(selector1).mouseenter(function(){
			$(selector2).addClass('active');
		});
		$(selector1).mouseleave(function(){
			$(selector2).removeClass('active');
		});
	};

	toggle('h1', '#particles');
	toggle('.we', '#lines');
	toggle('.we', '.about');

	var len = $('.like').length;
	$('.you').mouseenter(function(){
		var random = Math.floor(Math.random() * len);
		$('.like').eq(random).css('display', 'inline-block');
	});
	$('.you').mouseleave(function(){
		$('.like').css('display', 'none');
	});
}

$(document).ready(main);
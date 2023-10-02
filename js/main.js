var btn = document.getElementById('btn');

btn.onclick = function (e) {
	e.preventDefault();
	alert ('Заявка отправлена!')
}

$(function () {
	$('.menu-open').click(function(){
		$('.menu').toggleClass('show-menu')
	});
});

$(window).scroll(function(){
  var s= $(this).scrollTop();
  console.log(s );
});

$(function () {
	// $(window).scroll(function() {
	//     $('.gallery').each(function(){
	//         var imagePos = $(this).offset().top;

	//         var topOfWindow = $(window).scrollTop();
	//         if (imagePos < topOfWindow+650) {
	//             $(this).addClass("zoomIn");
	//         }
	//     });
	// });
	$(window).scroll(function() {
	    $('.input').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.btn').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.text').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.iframe').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("jackInTheBox");
	        }
	    });
	});
});
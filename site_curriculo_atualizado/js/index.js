// Menu responsivo

var menu_aberto_aberto = 0;

$('#btn_abrir_menu_mobile').on('click', function(e){
    
	if(menu_aberto_aberto == 0){
		abrirMenu();
		
		var target = document.querySelector('.menu-mobile-animado');
		var player = target.animate([
			{transform: 'translate(0,0)'},
			{transform: 'translate(230px,0)'},
		],500)
		player.addEventListener('finish', function () {
			target.style.transform = 'translate(230px,0)'
		});

	}else{
		fecharMenu();
	}
	
});

$('#btn_fechar_menu_mobile').on('click', function(e){
    
	if(menu_aberto_aberto == 0){
		abrirMenu();
	}else{
		fecharMenu();

		var target = document.querySelector('.menu-mobile-animado');
		var player = target.animate([
			{transform: 'translate(230px,0)'},
			{transform: 'translate(0,0)'},
		],300)
		player.addEventListener('finish', function () {
			target.style.transform = 'translate(0,0)'
		});
	}
    
});

function abrirMenu(){
	$('#menu_mobile').show(200);
	menu_aberto_aberto = 1;
}

function fecharMenu(){
	$('#menu_mobile').hide(500);
	menu_aberto_aberto = 0;
}

// Scroll do menu

$(window).on("scroll", function() {
	if($(window).scrollTop() > 40) {
		$(".menu-fixed").addClass("menu-fixed-animado");
	}else{
		$(".menu-fixed").removeClass("menu-fixed-animado");
	}
});

// Scroll suave para links

$('.link-scroll').click(function (e){
	e.preventDefault();
	var id = $(this).attr('href'),
	    targetOffset = $(id).offset().top;

	$('html, body').animate({
		scrollTop: targetOffset
	}, 700);
});

//

$('.titulo-sobre').fadeIn(500);
    setTimeout(function(){
        $('.endereco').fadeIn(1000);
        setTimeout(function(){
            $('.texto-sobre').fadeIn(1500);
            setTimeout(function(){
                $('.icone-redes-sociais').fadeIn(2000);
            },500);
        },500);
    },500);
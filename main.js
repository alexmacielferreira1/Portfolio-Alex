$(document).ready(function () {
    // Alterna o menu ao clicar no botão hamburguer
    $('.menu-hamburguer').click(function () {
        $('.menu').slideToggle(); // Abre/fecha o menu com efeito de slide
    });

    // Se o usuário clicar em um link dentro do menu, ele fecha (para experiência mobile)
    $('.menu a').click(function () {
        if ($(window).width() <= 900) { // Verifica se está no modo mobile
            $('.menu').slideUp(); // Fecha o menu
        }
    });

    // Se redimensionar a tela e estiver maior que 768px, garante que o menu aparece
    $(window).resize(function () {
        if ($(window).width() > 900) {
            $('.menu').show(); // Garante que o menu apareça no desktop
        } else {
            $('.menu').hide(); // Garante que ele comece fechado no mobile
        }
    });
});

$(document).ready(function () {
    $(".menu-hamburguer").click(function () {
        $(".menu").toggleClass("active");
    });

    $(window).resize(function () {
        if ($(window).width() > 900) {
            $(".menu").removeClass("active"); // Garante que o menu se ajusta corretamente
        }
    });
});

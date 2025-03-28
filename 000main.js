$(document).ready(function () {
    // Alterna o menu ao clicar no botão hamburguer
    $('.menu-hamburguer').click(function () {
        console.log('Hamburguer menu clicado');
        // Apenas alterna a classe 'collapse' do Bootstrap, que gerencia a exibição do menu
        $('#navbarNav').toggleClass('collapse');
    });

    // Se o usuário clicar em um link dentro do menu, ele fecha (para experiência mobile)
    $('.menu a').click(function () {
        if ($(window).width() <= 900) { // Verifica se está no modo mobile
            console.log('Link dentro do menu clicado');
            // Remove a classe 'collapse' para fechar o menu
            $('#navbarNav').addClass('collapse');
        }
    });

    // Se redimensionar a tela e estiver maior que 900px, garante que o menu aparece
    $(window).resize(function () {
        if ($(window).width() > 900) {
            $('#navbarNav').removeClass('collapse'); // Garante que o menu apareça no desktop
            console.log('Tela maior que 900px, menu visível');
        } else {
            $('#navbarNav').addClass('collapse'); // Garante que ele comece fechado no mobile
            console.log('Tela menor que 900px, menu escondido');
        }
    });
});

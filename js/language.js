document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function() {
        console.log('DOM carregado. Aplicando idioma...');
    
        const savedLang = localStorage.getItem('selectedLanguage') || 'pt';
        console.log('Idioma carregado do localStorage (ou padrão):', savedLang);
        setLanguage(savedLang);
    
        // Lógica para trocar idioma
        document.getElementById("lang-pt")?.addEventListener("click", function () {
            console.log('Bandeira PT clicada');
            setLanguage("pt");
        });
    
        document.getElementById("lang-en")?.addEventListener("click", function () {
            console.log('Bandeira EN clicada');
            setLanguage("en");
        });
    }, 500);
});

// Função para definir o idioma e aplicar as traduções
function setLanguage(lang) {
    console.log(`Idioma selecionado: ${lang}`);
    
    // Salvar o idioma selecionado no localStorage
    localStorage.setItem('selectedLanguage', lang);
    console.log('Idioma salvo no localStorage:', lang);
    
    let translations = {
        pt: {
            'language-text': 'Escolha o idioma / Choose the language:',
            'home': 'INÍCIO',
            'about': 'SOBRE',
            'edu': 'FORMAÇÃO',
            'exp': 'EXPERIÊNCIA',
            'port': 'PORTFÓLIO',
            'contact': 'CONTATO'
        },
        en: {
            'language-text': 'Choose the language / Escolha o idioma:',
            'home': 'HOME',
            'about': 'ABOUT',
            'edu': 'EDUCATION',
            'exp': 'EXPERIENCE',
            'port': 'PORTFÓLIO',
            'contact': 'CONTACT'
        }
    };
    
    console.log('Atualizando texto da página...');
    const languageElements = document.querySelectorAll('[data-lang-key]');
    languageElements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
    
    document.querySelector('.language-bar span').innerText = translations[lang]['language-text'];

    console.log('Texto atualizado com sucesso!');
}

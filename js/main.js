window.onload = function () {
    const fileUrl = 'https://docs.google.com/spreadsheets/d/12_g-aSPwNdqo5uyUnqlG7Fs-xY27y37s/export?format=csv&gid=949877154';

    fetch(fileUrl)
        .then(response => response.text())
        .then(csv => {
            const workbook = XLSX.read(csv, { type: 'string' });
            const sheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(sheet);
            console.log(jsonData); // Aqui você usa os dados como quiser

            // Definindo as variáveis para armazenar as seleções dos filtros
            var selectedActivities = new Set();
            var selectedClients = new Set();
            var selectedSoftwares = new Set();
            var activeCategory = 'all'; // Definir 'all' como categoria padrão
            
            var activities = new Set();
            var clients = new Set();
            var softwares = new Set();
            var categories = new Set();
            
            // Função para limpar as seleções de clientes e softwares
            function clearSelections() {
                selectedClients.clear();
                selectedSoftwares.clear();
                document.querySelectorAll('.activity-filter').forEach(input => input.checked = false);
                document.querySelectorAll('.client-filter').forEach(input => input.checked = false);
                document.querySelectorAll('.software-filter').forEach(input => input.checked = false);
            }
            
            var portfolioContainer = document.getElementById('portfolio-container');
            var atividadeCheckboxes = document.getElementById('atividade-checkboxes');
            var clientCheckboxes = document.getElementById('client-checkboxes');
            var softwareCheckboxes = document.getElementById('software-checkboxes');
            var categoryMenu = document.querySelector('.portfolio-filter-menu ul'); // Seleciona o menu de categorias
            
            jsonData.forEach(item => {
                if (item.Atividade) {
                    item.Atividade.split(',').forEach(activity => activities.add(activity.trim()));
                }
                item.Client.split(',').forEach(client => clients.add(client.trim()));
                item.Software.split(',').forEach(software => softwares.add(software.trim()));
                categories.add(item.Category);

                var itemDiv = document.createElement('div');
                itemDiv.classList.add('col-md-4', 'col-sm-12', 'col-xs-12', 'filtr-item');
                itemDiv.setAttribute('data-category', item.Category);
                itemDiv.setAttribute('data-atividade', item.Atividade);
                itemDiv.setAttribute('data-client', item.Client);
                itemDiv.setAttribute('data-software', item.Software);
                itemDiv.setAttribute('data-title', item.Title);
                itemDiv.setAttribute('data-synopsis', item.Sinopse);
                itemDiv.setAttribute('data-link', item.Link);

                itemDiv.innerHTML = ` 
                    <div class="content-image">
                        <a href="#" class="portfolio-popup" data-bs-toggle="modal" data-bs-target="#imageModal">
                            <img src="https://img.youtube.com/vi/${item.Link}/hqdefault.jpg" alt="${item.Link}" class="portfolio-img">
                            <div class="image-overlay"></div>
                            <div class="portfolio-caption">
                                <div class="subtitle"><span id="title-gal">${item.Title}</span></div>
                                <div class="subtitle"><span>${item.Category}</span></div>
                            </div>
                        </a>
                    </div>
                `;
                portfolioContainer.appendChild(itemDiv);
            });

            function applyFilters() {
                var items = document.querySelectorAll('.filtr-item');
                let availableActivities = new Set();
                let availableClients = new Set();
                let availableSoftwares = new Set();

                items.forEach(item => {
                    var matchesCategory = activeCategory === 'all' || item.getAttribute('data-category') === activeCategory;
                    var matchesActivity = selectedActivities.size === 0 || 
    Array.from(selectedActivities).some(activity => 
        (item.getAttribute('data-atividade') || "").split(',').map(a => a.trim()).includes(activity)
    );
                    var matchesClient = selectedClients.size === 0 || Array.from(selectedClients).some(client => item.getAttribute('data-client').includes(client));
                    var matchesSoftware = selectedSoftwares.size === 0 || Array.from(selectedSoftwares).some(software => item.getAttribute('data-software').includes(software));

                    if (matchesCategory && matchesActivity && matchesClient && matchesSoftware) {
                        item.style.display = 'block';
                        item.getAttribute('data-atividade').split(',').forEach(activity => availableActivities.add(activity.trim()));
                        item.getAttribute('data-client').split(',').forEach(client => availableClients.add(client.trim()));
                        item.getAttribute('data-software').split(',').forEach(software => availableSoftwares.add(software.trim()));
                    } else {
                        item.style.display = 'none';
                    }
                });
                                    // Habilitar/desabilitar checkboxes de atividades baseados na categoria selecionada
                                    document.querySelectorAll('.atividade-filter').forEach(input => {
                                        input.disabled = !availableActivities.has(input.value);
                                        var label = input.parentElement;
                                        label.style.color = input.disabled ? '#0E0B1E' : ''; 
                                    });
                // Habilitar/desabilitar checkboxes de clientes baseados na categoria selecionada
                document.querySelectorAll('.client-filter').forEach(input => {
                    input.disabled = !availableClients.has(input.value);
                    // Adicionando a cor ao label quando o checkbox estiver desabilitado
                    var label = input.parentElement; // Obtendo o label que está associada ao input
                    label.style.color = input.disabled ? '#0E0B1E' : ''; // Cor cinza quando desabilitado
                 //   label.style.textDecoration = input.disabled ? 'line-through' : ''; // Pode adicionar riscado se desejar
                });
            
                // Habilitar/desabilitar checkboxes de softwares baseados na categoria selecionada
                document.querySelectorAll('.software-filter').forEach(input => {
                    input.disabled = !availableSoftwares.has(input.value);
                    // Adicionando a cor ao label quando o checkbox estiver desabilitado
                    var label = input.parentElement; // Obtendo o label que está associada ao input
                    label.style.color = input.disabled ? '#0E0B1E' : ''; // Cor cinza quando desabilitado
                   // label.style.textDecoration = input.disabled ? 'line-through' : ''; // Pode adicionar riscado se desejar
                });
            }
// Cria o título e adiciona ao container
let title_a = document.createElement('label');
title_a.id = 'titulo-filtro'; // Defina o ID desejado
title_a.textContent = 'ATIVIDADE:';
atividadeCheckboxes.appendChild(title_a);

activities.forEach(activity => {
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.value = activity;
    input.classList.add('atividade-filter');
    input.addEventListener('change', function () {
        this.checked ? selectedActivities.add(this.value) : selectedActivities.delete(this.value);
        applyFilters(); // Atualiza os filtros quando a seleção mudar
    });
    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + activity));
    atividadeCheckboxes.appendChild(label);
});
            // Criação dos checkboxes para clientes
            // Cria o título e adiciona ao container
            let title_c = document.createElement('label');
            title_c.id = 'titulo-filtro'; // Defina o ID desejado
            title_c.textContent = 'CLIENTE:';
            clientCheckboxes.appendChild(title_c);
            clients.forEach(client => {
                let label = document.createElement('label');
                let input = document.createElement('input');
                input.type = 'checkbox';
                input.value = client;
                input.classList.add('client-filter');
                input.addEventListener('change', function () {
                    this.checked ? selectedClients.add(this.value) : selectedClients.delete(this.value);
                    applyFilters(); // Atualiza os filtros quando a seleção mudar
                });
                label.appendChild(input);
                label.appendChild(document.createTextNode(" " + client));
                clientCheckboxes.appendChild(label);
            });

           // Limpa o container antes de adicionar novos checkboxes
    softwareCheckboxes.innerHTML = '';

    // Cria o título e adiciona ao container
    let title = document.createElement('label');
    title.id = 'titulo-filtro'; // Defina o ID desejado
    title.textContent = 'SOFTWARE:';
    softwareCheckboxes.appendChild(title);

softwares.forEach(software => {
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.value = software;
    input.classList.add('software-filter');
    input.addEventListener('change', function () {
        this.checked ? selectedSoftwares.add(this.value) : selectedSoftwares.delete(this.value);
        applyFilters(); // Atualiza os filtros quando a seleção mudar
    });

    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + software));
    softwareCheckboxes.appendChild(label);
});


            // Criando os itens do menu de categorias
            let allFilter = document.createElement('li');
            allFilter.setAttribute('data-category', 'all');
            allFilter.classList.add('active');
            allFilter.innerHTML = `<span>TODOS</span>`;
            categoryMenu.appendChild(allFilter);

            categories.forEach(category => {
                var listItem = document.createElement('li');
                listItem.setAttribute('data-category', category);
                listItem.innerHTML = `<span>${category}</span>`;
                categoryMenu.appendChild(listItem);
            });

            // Eventos de filtro por categoria
            document.querySelectorAll('.portfolio-filter-menu li').forEach(categoryItem => {
                categoryItem.addEventListener('click', function () {
                    activeCategory = this.getAttribute('data-category');
                    document.querySelectorAll('.portfolio-filter-menu li').forEach(item => item.classList.remove('active'));
                    this.classList.add('active');
                
                    clearSelections(); // Limpa as seleções de clientes e softwares ao mudar a categoria
                    applyFilters(); // Atualiza os filtros quando a categoria mudar
                });
            });

            // Inicializando os filtros
            applyFilters(); // Aplica os filtros ao carregar os dados
        })
        .catch(error => console.error('Erro ao carregar o arquivo Excel:', error));
};


window.onload = function () {
    var fileUrl = 'portfolio-excel.xlsx'; // Caminho para o arquivo Excel

    fetch(fileUrl)
        .then(response => response.arrayBuffer()) // Carrega o arquivo Excel
        .then(data => {
            // Lê o arquivo Excel
            var workbook = XLSX.read(data, { type: 'array' });
            // Pega a primeira aba da planilha
            var sheet = workbook.Sheets[workbook.SheetNames[0]];
            // Converte os dados da planilha para JSON
            var jsonData = XLSX.utils.sheet_to_json(sheet);

            console.log('Dados carregados do Excel:', jsonData); // Exibe os dados do Excel

            if (jsonData.length === 0) {
                console.log("Nenhum dado encontrado na planilha.");
            }

            // Verifica os dados carregados no console
            jsonData.forEach((item, index) => {
                console.log(`Item ${index + 1}:`, item);
            });

            // Definir os containers
            var portfolioContainer = document.getElementById('portfolio-container');
            var clientCheckboxes = document.getElementById('client-checkboxes');
            var softwareCheckboxes = document.getElementById('software-checkboxes');

            var clients = new Set();
            var softwares = new Set();
            var categories = new Set();

            // Preenchendo clientes, softwares e categorias
            jsonData.forEach(item => {
                if (item.Client) {
                    item.Client.split(',').forEach(client => clients.add(client.trim()));
                } else {
                    console.log("Sem cliente definido para o item:", item);
                }

                if (item.Software) {
                    item.Software.split(',').forEach(software => softwares.add(software.trim()));
                } else {
                    console.log("Sem software definido para o item:", item);
                }

                if (item.Category) {
                    categories.add(item.Category);
                } else {
                    console.log("Sem categoria definida para o item:", item);
                }
            });

            console.log("Clientes encontrados:", Array.from(clients));
            console.log("Softwares encontrados:", Array.from(softwares));
            console.log("Categorias encontradas:", Array.from(categories));

            // Adicionando os filtros na interface
            clients.forEach(client => {
                var checkbox = document.createElement('label');
                checkbox.innerHTML = `<input type="checkbox" name="cliente" value="${client.toLowerCase()}"> ${client}`;
                clientCheckboxes.appendChild(checkbox);
            });

            softwares.forEach(software => {
                var checkbox = document.createElement('label');
                checkbox.innerHTML = `<input type="checkbox" name="software" value="${software.toLowerCase()}"> ${software}`;
                softwareCheckboxes.appendChild(checkbox);
            });

            // Adicionando categorias ao filtro
            var categoryMenu = document.querySelector('.portfolio-filter-menu ul');
            categories.forEach(category => {
                var listItem = document.createElement('li');
                listItem.setAttribute('data-filter', category.toLowerCase());
                listItem.innerHTML = `<span>${category}</span>`;
                categoryMenu.appendChild(listItem);
            });

            // Função de filtro
            function filterPortfolio() {
                var filters = {
                    cliente: Array.from(document.querySelectorAll('input[name="cliente"]:checked')).map(checkbox => checkbox.value.toLowerCase()),
                    software: Array.from(document.querySelectorAll('input[name="software"]:checked')).map(checkbox => checkbox.value.toLowerCase()),
                    category: document.querySelector('.portfolio-filter-menu ul li.active')?.getAttribute('data-filter') || 'all'
                };

                console.log('Filtros aplicados:', filters); // Verifique os filtros no console

                document.querySelectorAll('.filtr-item').forEach(item => {
                    var itemId = item.getAttribute('data-id');
                    var itemClientes = item.getAttribute('data-client').split(',').map(str => str.trim().toLowerCase());
                    var itemSoftwares = item.getAttribute('data-software').split(',').map(str => str.trim().toLowerCase());
                    var itemCategory = item.getAttribute('data-category').toLowerCase();

                    var showItem = true;

                    // Filtrar por categoria
                    if (filters.category !== 'all' && filters.category !== itemCategory) {
                        console.log(`Item ${itemId} removido pela categoria`);
                        showItem = false;
                    }

                    // Filtrar por cliente
                    if (filters.cliente.length > 0 && !filters.cliente.some(cliente => itemClientes.includes(cliente))) {
                        console.log(`Item ${itemId} removido pelo cliente`);
                        showItem = false;
                    }

                    // Filtrar por software
                    if (filters.software.length > 0 && !filters.software.some(software => itemSoftwares.includes(software))) {
                        console.log(`Item ${itemId} removido pelo software`);
                        showItem = false;
                    }

                    // Exibir ou ocultar item
                    console.log(`Exibindo item ${itemId}: ${showItem}`);
                    item.style.display = showItem ? 'block' : 'none';
                });
            }

            // Ativar automaticamente o filtro "ADOBE PREMIERE"
            document.querySelectorAll('input[name="software"]').forEach(input => {
                if (input.value === 'adobe premiere') {
                    input.checked = true;
                }
            });

            // Eventos de clique nas categorias
            document.querySelectorAll('.portfolio-filter-menu ul li').forEach(li => {
                li.addEventListener('click', function () {
                    document.querySelectorAll('.portfolio-filter-menu ul li').forEach(li => li.classList.remove('active'));
                    this.classList.add('active');
                    filterPortfolio();
                });
            });

            // Eventos de mudança nos checkboxes
            document.querySelectorAll('input[name="cliente"], input[name="software"]').forEach(input => {
                input.addEventListener('change', function () {
                    console.log('Alteração no filtro:', this.value); // Verifique se está sendo acionado
                    filterPortfolio();
                });
            });

            // Aplicar filtro automaticamente ao carregar
            filterPortfolio();
        })
        .catch(error => console.error('Erro ao carregar o arquivo Excel:', error));
};

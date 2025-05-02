document.addEventListener('click', function (event) {
    let item = event.target.closest('.filtr-item');

    if (item) {
        event.preventDefault();

        let title = item.getAttribute('data-title');
        let category = item.getAttribute('data-category');
        let client = item.getAttribute('data-client');
        let software = item.getAttribute('data-software');
        let synopsis = item.getAttribute('data-synopsis') || "Sinopse não disponível.";
        let link = item.getAttribute('data-link');

        let embedLink = link;
        if (link.includes('youtube.com/watch?v=')) {
            let videoId = link.split('v=')[1].split('&')[0];
            embedLink = `https://www.youtube.com/embed/${videoId}`;
        }

        let modalElement = document.getElementById('meuModal');
        if (!modalElement) {
            console.error('Modal não encontrado no DOM.');
            return;
        }

        let modalDialog = modalElement.querySelector('.modal-dialog');
        if (modalDialog) {
            modalDialog.classList.add('modal-fullscreen');
            modalDialog.style.width = "50%";
            modalDialog.style.maxWidth = "50%";
            modalDialog.style.height = "100%";
        }

        let modalLabel = document.getElementById('meuModalLabel');
        if (modalLabel) {
            modalLabel.textContent = title;
        }

        let modalBody = document.querySelector('.modal-body');
        if (modalBody) {
            modalBody.innerHTML = `
                <div class="modal-content d-flex flex-column">
    <!-- Vídeo Container -->
    <div class="video-container">
        <iframe class="video-frame" src="https://www.youtube.com/embed/${embedLink}" frameborder="0" allowfullscreen></iframe>
    </div>

    <!-- Content Container -->
    <div class="content-container">
        <!-- Title -->
        <h3 class="title">${title}</h3>
        
        <!-- Synopsis -->
        <p class="synopsis">${synopsis}</p>

        <!-- Client -->
        <div class="client-item">
            <div class="client-icon-container">
                ${generateClientIcon(client)}
            </div>
        </div>

        <!-- Category -->
        <div class="category-item">
            <strong class="category-label">Categoria:</strong>
            <span class="badge audiovisual">
            <span>${category}</span>
        </div>

        <!-- Software -->
        <div class="software-item">
            <strong class="software-label">Software(s) Utilizado(s):</strong>
            <div class="software-icons-container">
                ${generateSoftwareIcons(software)}
            </div>
        </div>
    </div>
</div>

</div>



                        </div>
                    </div>
                </div>
            `;
        }

        try {
            const meuModal = new bootstrap.Modal(modalElement, {
                keyboard: false 
            });
            meuModal.show();
        } catch (error) {
            console.error('Erro ao exibir o modal:', error);
        }
    }
});

function generateSoftwareIcons(softwareList) {
    if (!softwareList) return '';
    return softwareList.split(',').map(software => {
        const trimmedSoftware = software.trim();
        return `
            <span class="badge audiovisual">
                <img src="./icones/icone_${trimmedSoftware}.png" alt="${trimmedSoftware}" class="software-icon">
                <span class="software-name">${trimmedSoftware}</span>
            </span>
        `;
    }).join(' ');
}


function generateClientIcon(client) {
    if (!client) return '';
    return `
        <div class="client-item">
            <strong class="client-label">Cliente:</strong>
            <span class="badge audiovisual">
            <span class="client-icon-wrapper">
                <img src="./icones/icone_${client}.png" alt="${client}" class="client-icon">
                <span class="client-name">${client}</span>
            </span>
        </div>
    `;
}

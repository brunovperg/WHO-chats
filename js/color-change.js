
const options = document.getElementById("options");
const body = document.querySelector('body');

options.addEventListener("click", (evento) => {
    if (evento.target.classList == "girls") {
        body.classList.remove('color-mode-2');
        body.classList.add('color-mode-1');
    } else if (evento.target.classList == "boys") {
        body.classList.remove('color-mode-1');
        body.classList.add('color-mode-2');
    }
})

// ########### BUTTON TO CHANGE BACKGROUND AND BUTTON COLORS ########
const colorModeButton = document.querySelector('#color-mode');
colorModeButton.addEventListener('click', () => {
    // Obter o elemento body
    const body = document.querySelector('body');
    // Verificar qual esquema de cores está atualmente ativo
    if (body.classList.contains('color-mode-1')) {
        // Desativar esquema de cores 1 e ativar esquema de cores 2
        body.classList.remove('color-mode-1');
        body.classList.add('color-mode-2');

    } else if (body.classList.contains('color-mode-2')) {
        // Desativar esquema de cores 2 e ativar esquema de cores 3
        body.classList.remove('color-mode-2');
        body.classList.add('color-mode-1');
    }
})


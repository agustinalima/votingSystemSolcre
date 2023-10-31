fetch('URL_DE_TU_API')
    .then(response => response.json())
    .then(data => {
        // Llenar dinámicamente el <select> con los datos recibidos de la API
        const select = document.getElementById('candidato');
        data.forEach(candidato => {
            const option = document.createElement('option');
            option.value = candidato.id;
            option.textContent = candidato.nombre;
            select.appendChild(option);
        });
    })
    .catch(error => {
        console.error(error);
        // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario
    });

function cargar(pagina) {
    fetch(pagina)
        .then(res => {
            if (!res.ok) throw new Error();
            return res.text();
        })
        .then(html => {
            document.getElementById('container').innerHTML = html;
        })
        .catch(() => cargar('../pages/NotFound.html')); // 👈 reutiliza
}


// cargar inicio por defecto
cargar('../pages/Services.html');


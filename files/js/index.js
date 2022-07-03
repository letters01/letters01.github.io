var buttons = document.querySelectorAll('.list-group .container-buttons button');
buttons.forEach(butt => {
    butt.addEventListener('click', () => {
        var idMod = butt.getAttribute('id');
        switch (idMod) {
            case 'TMO':
                copyClipboard('MangasDotNet.json');
                break;
        
            default:
                break;
        }
    });
    butt.addEventListener('pointerdown', () => {
        document.getElementById('prueba').innerText = 'PointerDown';
        var idMod = butt.getAttribute('id');
        switch (idMod) {
            case 'TMO':
                copyClipboard('MangasDotNet.json');
                break;
        
            default:
                break;
        }
    });
});



async function copyClipboard(modulo) {
    try {
        fetch('modules/' + modulo)
        .then(res => res.text())
        .then(cont => {
            await navigator.clipboard.writeText( await cont);
        });
        
        document.getElementById('result').innerText = 'Copiado';
    } catch (err) {
        document.getElementById('result').innerText = 'Error: ' + err;
    }
}

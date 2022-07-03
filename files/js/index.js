var buttons = document.querySelectorAll('.list-group .container-buttons button');
buttons.forEach(butt => {
    butt.addEventListener('pointerdown', async () => {
        document.getElementById('prueba').innerText = 'PointerDown';
        var idMod = butt.getAttribute('id');
        switch (idMod) {
            case 'TMO':
                await copyClipboard('LectorTMO.json');
                break;
            case 'MDT':
                await copyClipboard('MangasDotNet.json');
                break;
            default:
                break;
        }
    });
});

async function copyClipboard(modulo) {
    var url = 'modules/' + modulo;
    document.getElementById('result3').innerText = url;
    try {
        await fetch(url)
        .then(resp => resp.text())
        .then(text => {
            navigator.clipboard.writeText(text);
        })
        .finally(()=> {
            document.getElementById('result2').innerText = 'Copiado';
        });
        
       
    } catch (err) {
        document.getElementById('result2').innerText = 'Error: ' + err;
    }
}

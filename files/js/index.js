var buttons = document.querySelectorAll('.list-group .container-buttons button');
buttons.forEach(butt => {
    butt.addEventListener('pointerdown', async () => {
        document.getElementById('prueba').innerText = 'PointerDown';
        var idMod = butt.getAttribute('id');
        switch (idMod) {
            case 'TMO':
                await copyClipboard('https://raw.githubusercontent.com/letters01/letters01.github.io/main/modules/LectorTMO.json');
                
                break;
        
            default:
                break;
        }
    });
});

async function copyClipboard(modulo) {
    
    try {
        await fetch(modulo)
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

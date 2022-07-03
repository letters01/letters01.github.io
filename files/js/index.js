
var buttons = document.querySelectorAll('.list-group .container-buttons button');
buttons.forEach(butt => {
    /*
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
    */
    butt.addEventListener('pointerdown', async () => {
        document.getElementById('prueba').innerText = 'PointerDown';
        var idMod = butt.getAttribute('id');
        switch (idMod) {
            case 'TMO':
                await copyClipboard('MangasDotNet.json');
                
                break;
        
            default:
                break;
        }
    });
});

async function copyClipboard(modulo) {
    try {
        //await navigator.clipboard.writeText(location.href);
        document.getElementById('result').innerText = 'Copiado';
    } catch (err) {
        document.getElementById('result').innerText = 'Error: ' + err;
    }
    try {
        await fetch('modules/MangasDotNet.json')
        .then(resp => resp.text())
        .then(text => {
            await navigator.clipboard.writeText(await text);
        })
        .finally(()=> {
            document.getElementById('result2').innerText = 'Copiado';
        });
        
       
    } catch (err) {
        document.getElementById('result2').innerText = 'Error: ' + err;
    }
}

var botones = document.querySelectorAll('.container-buttons button');

botones.forEach(boton => {
    boton.addEventListener('pointerdown', async () => {
        var modu = boton.getAttribute('id');
        switch (modu) {
            case 'TMO':
                await copyC('../../modules/LectorTMO.json');
                break;
            case 'MDT':
                await copyC('../../modules/MangasDotNet.json');
                break;
            default:
                break;
        }
    })
});

async function copyC(module) {
    try {
        await fetch(module)
        .then(resp => resp.text())
        .then(text => {
            navigator.clipboard.writeText(text);
            document.getElementById('result').innerText = 'Copiado';
        })
        .catch(err => {
            document.getElementById('result3').innerText = err;
        })
    } catch (error) {
        
    }
}

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
                navigator.clipboard.writeText('Buneas noches');
                console.trace();
                break;
            default:
                break;
        }
    })
});

async function copyC(module) {
    try {
        await fetch('../../modules/LectorTMO.json')
        .then(resp => resp.text())
        .then(text => {
            document.getElementById('result').innerText = 'Copiado';
            document.getElementById('result2').innerText = text;
            navigator.clipboard.writeText(text);
            document.getElementById('result3').innerText = console.trace();
        })
        .catch(err => {
            console.trace();
            document.getElementById('result3').innerText = err;
        })
    } catch (error) {
        
    }
}

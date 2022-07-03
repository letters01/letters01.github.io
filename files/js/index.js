var botones = document.querySelectorAll('.container-buttons button');

botones.forEach(boton => {
    boton.addEventListener('pointerdown', async () => {
        var modu = boton.getAttribute('id');
        switch (modu) {
            case 'TMO':
                await copyC('../../modules/LectorTMO.json');
                break;
            case 'MDT':
                await copyC('../../modules/MangasDotNet.json').then((tex) => writeToClipboard(tex));
                
                break;
            default:
                break;
        }
    })
});
async function writeToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error);
    }
}
async function copyC(modulo) {
    try {
        const resp = await fetch(modulo);
        const text = await resp.text();
        return text;
        /*await fetch(modulo)
        .then(resp => resp.text())
        .then(text => {
            document.getElementById('result').innerText = 'Copiado';
            document.getElementById('result2').innerText = text;
            return 
        })
        .catch(err => {
            console.trace();
            document.getElementById('result3').innerText = err;
        })*/
    } catch (error) {
        console.error(error);
    }
}

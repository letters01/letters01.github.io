var botones = document.querySelectorAll('.container-buttons button');

botones.forEach(boton => {
    boton.addEventListener('pointerdown', async () => {
        var modu = boton.getAttribute('id');
        switch (modu) {
            case 'TMO':
                checkUserAgent('modules/LectorTMO.json');
                
                break;
            case 'MDT':
               checkUserAgent('modules/MangasDotNet.json');
                
                break;
            default:
                break;
        }
    })
});

//Obtener UserAgent

async function checkUserAgent(module) {
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        console.log("pressed");
        document.getElementById('result').innerText = 'Dispositivo Apple';
        await copyToTextAr(module);
    } else {
        console.log('estas en navegador');
        fetchOtros(module);
    }
}

//Funciones para Apple

async function copyToTextAr(module){
    await fetch(module)
    .then(resp => resp.text())
    .then((respText) => {

        if(createDeleteText()){
            var texMod = document.getElementById('textModule').value;
            copyToClip(texMod);
            document.body.removeChild(document.getElementById('textModule'));
        } else {
            var cont = document.createElement('textarea');
            cont.setAttribute('id', 'textModule');
            cont.setAttribute('hidden', 'true');
            cont.setAttribute('readonly', 'true');
            cont.value = respText;
            document.body.appendChild(cont);
        }

        
    });
}

function createDeleteText(){
    if(document.getElementById('textModule')){
        var textA = document.getElementById('textModule').value;
        if(textA.value != '') {
           return true;
        }
    } else {
        console.log('NO Existe')
        return false;
    }
}

async function copyToClip(data) {
    try {
        await navigator.clipboard.writeText(await data);
        //console.log(data);
    } catch (error) {
        document.getElementById('result').innerText = error;
    }
}



//Funciones otros dispositivos
async function fetchOtros(module) {
    await fetch(module)
    .then(resp => resp.text())
    .then(cont => {
        navigator.clipboard.writeText(cont);
    })
}

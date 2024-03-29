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
    if (navigator.userAgent.match(/iphone|ipad|ipod/i)) {
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
            
            copyToClip();
            document.body.removeChild(document.getElementById('textModule'));
        } else {
            var cont = document.createElement('textarea');
            cont.setAttribute('id', 'textModule');
            //cont.setAttribute('hidden', 'true');
            //cont.setAttribute('readonly', 'true');
            cont.value = respText;
            document.body.appendChild(cont);
        }

        
    });
}

function createDeleteText(){
    if(document.getElementById('textModule')){
        var textA = document.getElementById('textModule');
        
        if(textA.value != '') {
           return true;
        }
    } else {
        console.log('NO Existe')
        return false;
    }
}

async function copyToClip() {
    try {
        var texMod =  document.getElementById('textModule');
        texMod.select();
        texMod.setSelectionRange(0, 99999);
        await navigator.clipboard.writeText(texMod.value);
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

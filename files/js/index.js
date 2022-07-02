var buttons = document.querySelectorAll('.list-group .container-buttons button');
buttons.forEach(butt => {
    butt.addEventListener('click', () => {
        var idMod = butt.getAttribute('id');
        switch (idMod) {
            case 'TMO':
                copyClipboard('MangasDotNet.txt');
                break;
        
            default:
                break;
        }
    });
});

function copyClipboard(modulo) {
    fetch('modules/' + modulo)
    .then(res => res.text())
    .then(content => {
        var copyText = content;
        navigator.clipboard.writeText(copyText);
    }
    );
}
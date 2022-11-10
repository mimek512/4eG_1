let paragraf = document.getElementById('paragraf');
function formatSize(){
    let rozmiar=document.getElementById('rozmiar').value;
    paragraf.style.fontSize=rozmiar+'%';
    
}
function formatStyle(){
    let lista=  document.getElementById('lista').value;
    paragraf.style.fontStyle = lista;

}
function formatRed(){
    paragraf.style.color='red';
    formatSize()
    formatStyle()
}

function formatGreen(){
    paragraf.style.color='green';
    formatSize()
    formatStyle()
}

function formatBlue(){
    paragraf.style.color='blue';
    formatSize()
    formatStyle()
}

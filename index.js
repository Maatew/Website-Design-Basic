let miImagen = document.querySelector('img');
miImagen.onclick = function() {
    let src = miImagen .getAttribute('src');
    if(src === 'messi1.jpg') {
        miImagen.setAttribute('src', 'messi2.jpg');
    }
    else {
        miImagen.setAttribute('messi1.jpg', 'src');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function establecerNombreUsuario() {
    let miNombre = prompt('Porfavor, Ingresa tu nombre de Usuario');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Página de Messi,  ' + miNombre;
}

if(!localStorage.getItem('nombre')){
    establecerNombreUsuario();
}else{
    let nombreUsuario = localStorage.getItem('nombre');
    miTitulo.textContent = 'Página de Messi,  ' + nombreUsuario;
}

miBoton.onclick = function() {
    establecerNombreUsuario();
}
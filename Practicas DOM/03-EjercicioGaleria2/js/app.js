

const pantalla = document.querySelector('#image');
const botones = document.querySelector('#buttons');
const titulo = document.querySelector('#title');
const parrafo = document.querySelector('#paragraph');

botones.addEventListener('click', e => {

    console.log(e.target.textContent);

    flores.forEach(flor => {
        if (flor.idFlor == e.target.textContent) {
            pantalla.src = flor.imagen;
            titulo.textContent = flor.titulo;
            parrafo.textContent = flor.descripcion;

        }
    })

}) 



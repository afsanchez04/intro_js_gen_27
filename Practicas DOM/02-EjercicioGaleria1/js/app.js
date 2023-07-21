
const titulo = document.querySelector('#paragraph');
const pantalla = document.querySelector('#bigImage');
const contMiniaturas = document.querySelector('#imgsContainer');

contMiniaturas.addEventListener('click', function (e){

    //console.log( e.target );
    if(e.target.src){
        pantalla.src = e.target.src;
        titulo.textContent = e.target.name;
    }

}) 






//1. Variables
const btnInicio = document.querySelector('#inicio');
const player1 = document.querySelector('#jugador1');
const player2 = document.querySelector('#jugador2');
const player3 = document.querySelector('#jugador3');
let pos1 = 0;
let pos2 = 0;
let pos3 = 0;


//2. Funciones + Eventos
btnInicio.addEventListener('click', () => {

    btnInicio.style.display = 'none';
    let intervalo = setInterval(carrera, 130);

    function carrera(){

        pos1 += Math.round( Math.random()*20 );
        player1.style.marginLeft = `${pos1}px`;

        pos2 += Math.round( Math.random()*20 );
        player2.style.marginLeft = `${pos2}px`;

        pos3 += Math.round( Math.random()*20 );
        player3.style.marginLeft = `${pos3}px`;

        if(pos1 >= 663){
            console.log('Ganó Rojo');
            clearInterval(intervalo);
        }else if(pos2 >= 663){
            console.log('Ganó Azul');
            clearInterval(intervalo);
        }else if(pos3 >= 663){
            console.log('Ganó Amarillo');
            clearInterval(intervalo);
        }

    }

});



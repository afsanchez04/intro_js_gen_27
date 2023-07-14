/* 
  1. declarar la función
  2. parametros
  3. sentencias
  4. lo que retorna, solo puedo retornar una vez
  5. usarla
*/

/* se crea la función */
const username = "Alexander Celis";

function mensaje(username = "") {
  return "Bienvenido " + username;
}

/* se llama la función */
const sms = mensaje(username);

console.log(sms);

function suma(n1 = 0, n2 = 0, n3 = 0) {
  if (
    typeof n1 !== "number" ||
    typeof n2 !== "number" ||
    typeof n3 !== "number"
  ) {
    return 0;
  }

  return n1 + n2 + n3;
}

const resultado = suma(10, 27, 10);
console.log(resultado);

function combinarFunciones() {
  return suma(10, 20, 30) + mensaje("Roman");
}

/* console.log(parseInt('1200'));
console.log(parseFloat('10.10'));
console.log(Number('1200'));
console.log(Boolean('true'));
console.log(String(1200)); */

/* const edad = Number(prompt('Ingrese su edad'));

console.log(typeof edad); */

function createUser({ name, lastName, age, pass }) {
  return {
    name,
    lastName,
    fullName: `${name} ${lastName}`,
    age,
    pass,
    isAdult: age >= 18,
  };
}

const userJesus = createUser({
  pass: "123456",
  age: 17,
  lastName: "janeiro",
  name: "jesus",
});

console.log(userJesus);

(function () {
  console.log("Hola");
})();

(function (mensaje) {
  console.log(mensaje);
})("Hola mundo desde función sin nombre");

const reproductorDeMusicaObject = {
  play: function (nombreCancion) {
    console.log("Reprociendo " + nombreCancion);
  },
  pause: function () {
    reproductorDeMusica.play("Creep");
    console.log("Pausa");
  },
};

// reproductorDeMusicaObject.play("Creep");

function reproductorDeMusicaFunc(cancion) {
  function play() {
    console.log("Reprociendo " + cancion.nombre);
  }

  function pause() {
    console.log("Pausa");
  }

  return {
    play,
    pause,
  };
}

const cuentaBancaria = reproductorDeMusicaFunc({ nombre: "Creep" });

cuentaBancaria.play();


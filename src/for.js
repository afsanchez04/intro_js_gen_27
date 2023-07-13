// variable de control
/* const control = 10;

for (let index = 0; index <= control; index += 2) {
  console.log(index);
}

for (let index = 0; index <= 30; index++) {
  let resultado = '';
  if (index % 2 === 0) {
    resultado = 'El numero: ' + index + ' es par';
  } else {
    resultado = 'El numero: ' + index + ' es impar';
  }

  console.log(resultado);
} */

const usuarios = [
  {
    name: "Alexander",
    pass: "123456",
    verified: true,
  },
  {
    name: "Luis",
    pass: "123456",
    verified: false,
  },
  {
    name: "Jesus",
    pass: "123456",
    verified: false,
  },
];

/* for (let index = 0; index < usuarios.length; index++) {
  const element = usuarios[index];
  console.log(element.name)
  console.log(element.pass)
  if (!element.verified) {
    alert(element.name + ' Debes verificar tu mail')
  }
} */

const productos = [
  {
    name: "Celular",
    price: 100,
    isDiscount: true,
    percentage: 0.1,
  },
  {
    name: "Monitor",
    price: 100,
    isDiscount: false,
    percentage: 0,
  },
];

const element = document.querySelector(".elemento");

/* for */
/* for (let index = 0; index < productos.length; index++) {
  if (productos[index].isDiscount) {
    element.innerHTML += '<p>'+productos[index].name+'</p>';
  }
} */

/* for in -> pensado mas para objetos */
/* for (const index in productos) {
  console.log(productos[index]);
} */

/* for of -> pensado para arreglos */
/* for (const index of productos) {
  if (index.isDiscount) {
    console.log(index.name)
  }
} */

productos.forEach((item, index) => {
  if (item.isDiscount) {
    item = {
      ...item,
      price: item.price - item.price * item.percentage,
    };
    productos[index] = item;
  }
});

console.log(productos);

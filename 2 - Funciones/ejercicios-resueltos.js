console.log('ejercicios resueltos'.toUpperCase())
/*
  Ejercicio 1
  Declara una variable dentro de una función e intenta acceder a ella 
  desde fuera mostrándola en la consola. 
  Comprueba si es posible o no.
*/
function ordenar() {
  let number = 123
  console.log(number)
}

// No podemos acceder a la variable porque está dentro de la función.
// console.log(number) // la consola nos dice que number no esta definido
// Lo tenemos comentado porque al saltar un error no se ejecuta el resto

// Si la variable estuviera declarada fuera de la función si podríamos acceder
// desde dentro.


/*
  Ejercicio 2
  Crea una función que calcule el área de un huerto de patatas.
*/
const area = (largo, ancho) => `${largo * ancho} m²`
console.log(area(80, 40)) // 80 metros de largo por 40 de ancho


/*
  Ejercicio 3
  Crea otra función que calcule la edad de alguien en base a la fecha de nacimiento.
*/
const edad = fecha => `${new Date().getFullYear() - fecha} años`
console.log(edad(1992))


/*
  Ejercicio 4
  Crea una última función que use de entrada el nombre de una persona y su fecha de nacimiento
  y que si uno de estos parámetros no está definido salga de la función
  mostrando un mensaje de alerta por pantalla.
*/
function mensaje_obligatorio(nombre, fecha) {
  if (!nombre || !fecha) return alert('Tiene que insertar nombre y fecha')
  return `Mi nombre es ${nombre} y naci en ${fecha}`
}

console.log(mensaje_obligatorio('Jenny', 1984))
// console.log(mensaje_obligatorio('Jenny')) // no nos devolverá el mensaje
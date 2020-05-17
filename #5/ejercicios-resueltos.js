console.log('\n\n\n', '*** TAREAS ***')

// 👉 Crear varios objetos con los datos de personas famosas
// Primero creo mi fábrica
const nuevo_famoso = (nombre, fecha_nacimiento, disciplina) => {
  return {
    nombre,
    fecha_nacimiento,
    disciplina
  }
}

const nikola = nuevo_famoso('Nikola Tesla', 1856, 'Ingeniería')
const marie = nuevo_famoso('Marie Curie', 1867, 'Física y Química')
const albert = nuevo_famoso('Albert Einstein', 1879, 'Física')

console.log(nikola, marie, albert)


// 👉 Acceder a mis propiedades dentro de mi objeto con this
const animal = {
  nombre: 'Simba',
  tipo: 'león',
  saludar(nombre) {
    console.log(`Hola ${nombre}. Soy un ${this.tipo} y mi nombre es ${this.nombre}`)
  }
}

animal.saludar('Lady Gaga')
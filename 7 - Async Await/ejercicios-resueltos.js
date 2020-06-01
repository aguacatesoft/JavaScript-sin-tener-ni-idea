/**
 * Crea una promesa
 * @param ok true -> resolvemos, false -> rechazamos
 */
function crea_promesa(ok) {
  return new Promise((bien, mal) => {
    setTimeout(() => ok ? bien() : mal(), 8e3)
  })
}

// Termina en el mommento que una promesa termina mal
Promise.all([crea_promesa(true), crea_promesa(false), crea_promesa(true)])
  .catch(() => console.log('Mal'))

// Termina cuando hayan terminado todas
const mi_funcion_async = async () => 
  await Promise.all([crea_promesa(true), crea_promesa(false), crea_promesa(true)])
  
mi_funcion_async().catch(() => console.log('Mal'))



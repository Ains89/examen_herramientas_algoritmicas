// Crear función que filtre números mayores o iguales a 6 y que tome como parámetro un array
// Filter(): Consiste en filtrar uno o más elementos (un subconjunto) de una colección más grande de elementos (un superconjunto) basándose en alguna condición/preferencia.

function filtrarNumerosMayoresOIgualesASeis(array) {
    const resultado = array.filter(numero => numero >= 6);
    return resultado;
  }
  const array = [2, 4, 6, 8, 10, 12];

const resultado = filtrarNumerosMayoresOIgualesASeis(array);

console.log(resultado); 
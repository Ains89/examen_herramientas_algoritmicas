function sumarArreglos(arreglo1, arreglo2) {
    const resultado = [];
    
    for (let i = 0; i < arreglo1.length; i++) {
      resultado.push(arreglo1[i] + arreglo2[i]);
    }
    
    return resultado;
  }
  const arreglo1 = [1, 2, 3];
const arreglo2 = [4, 5, 6];

const resultado = sumarArreglos(arreglo1, arreglo2);

console.log(resultado); 
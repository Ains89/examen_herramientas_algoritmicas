function obtenerCantidadDeElemento(matriz, elemento) {
    let cantidad = 0;
    
    matriz.forEach(subelement => {
      subelement.forEach(num => {
        if (num === elemento) {
          cantidad++;
        }
      });
    });
    
    return cantidad;
  }
  
  const matriz = [['2', '1', '1', '2'], ['2', '2'], ['1', '2', '1'], ['2', '2', '2', '1']];
  const elemento = '2';
  
  const cantidad = obtenerCantidadDeElemento(matriz, elemento);
  console.log(cantidad);
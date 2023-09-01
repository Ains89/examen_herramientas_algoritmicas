function matrizCuadrada(matriz){
    const filas= matriz.length;
    const columnas= matriz[0].length;
if(filas!==columnas){
    return false;
}
return true;
}

const matriz1=[[1,2,3],
               [4,5,6],
               [7,8,9]]; 
               
               
               const matriz2=[[1,2,3,4],
                              [5,6],
                              [3,1]];
console.log(matrizCuadrada(matriz1));
console.log(matrizCuadrada(matriz2));
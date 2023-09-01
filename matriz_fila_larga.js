function matrizFilaMasLarga(matriz) {
    let filaMasLarga = matriz[0];
    for (let i = 0; i < matriz.length; i++) {
        if (matriz[i].length > filaMasLarga.length) {
            filaMasLarga = matriz[i];
        }
    }
    return filaMasLarga;
}
const matriz1 = [
    [1, 2, 3],
    [4, 5, 6, 7, 8],
    [9, 10],
    [11, 12, 13, 14]
];

const matriz2 = [[1,2,3,4,5,2],
                 [2,3,4], 
                 [5]];

console.log(matrizFilaMasLarga(matriz1)); 
console.log(matrizFilaMasLarga(matriz2)); 
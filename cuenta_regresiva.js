// Crear una función que haga la cuenta regresiva y que tome como parámetro numeroInicial recuerde utilizar en este caso el metodo push()
// Push(): nos permite añadir un nuevo elemento al final de un array. Al igual que otros métodos para manipular arrays como map y filter



function cuentaRegresiva(numeroInicial) {
  const resultado = [];
  
  for (let i = numeroInicial; i >= 0; i--) {
    resultado.push(i);
  }
  
  return resultado;
}
const numeroInicial = 20;

const cuenta = cuentaRegresiva(numeroInicial);

console.log(cuenta); 
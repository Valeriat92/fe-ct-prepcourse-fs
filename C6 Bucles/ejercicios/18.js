function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var inicio = Math.min(a,b);
  var fin = Math.max(a,b);
  var producto = 1;

  for (var i = inicio; i <= fin; i++) {
    producto *= i;
  }
  return producto;
}

console.log(productoEntreNúmeros(2, 4) );
module.exports = productoEntreNúmeros;
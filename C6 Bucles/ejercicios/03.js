function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  return x >= y ? x : y;
}
console.log(obtenerMayor(8,4));
module.exports = obtenerMayor;

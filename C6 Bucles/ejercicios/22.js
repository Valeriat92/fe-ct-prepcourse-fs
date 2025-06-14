function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var i = 0;
  do {
    num += 5;
    i++;
  } while (i < 8);
  return num;
}
console.log(doWhile(0));  // 0 + 5*8 = 40
console.log(doWhile(10)); // 10 + 5*8 = 50
module.exports = doWhile;
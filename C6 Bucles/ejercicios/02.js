function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  return booleano1 && booleano2;
}

console.log(esVerdaderoYFalso(true, true));   // true
console.log(esVerdaderoYFalso(false, false)); // false
console.log(esVerdaderoYFalso(true, false));  // false
console.log(esVerdaderoYFalso(false, true));  // false
module.exports = esVerdaderoYFalso;

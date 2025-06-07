function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  return Number.isInteger(numero);
}


console.log( esNumeroEntero(10) );    
console.log( esNumeroEntero( 7.2 ) ); 
console.log( esNumeroEntero("12") );
module.exports = esNumeroEntero;


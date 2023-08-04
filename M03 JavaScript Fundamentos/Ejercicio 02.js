/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   console.log ("Es un string" + string)
}
devolverString("string")

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:

   var sumar = x + y;
   return sumar;
}
suma (5,10)

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var restar = x - y;
   return restar;
}
resta (15,3)

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var dividir = x / y;
   return dividir;
}
divide (18,6)

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var multiplicar  = x * y;
   return multiplicar;
}
multiplica (7,3)

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var resto = x % y;
   return resto;
}
obtenerResto (21,5)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};

/*
Micro desafío 2:

Instrucciones
1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).
2. En el archivo se desarrolla un código para calcular el nuevo sueldo a un trabajador,
para ello debes declarar las siguientes variables y almacenar en ellas los siguientes
datos del trabajador:
a. nombre
b. apellido
c. sueldoActual
d. porcentajeAumento
3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la
operación del aumento del trabajador (sueldoActual * porcentajeAumento)/ 100).
4. En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo
sueldo.
5. Usando el console.log() y concatenando string, muestra en la consola de Visual
Studio Code los contenidos de cada una de las variables:
Ejemplo:

Hola, estimad@ Gloria Medina
En base a su sueldo actual:
$20000
Ha recibido un aumento del 25%:
$5000
y su nuevo sueldo es de: $25000
*/

let nombre="Juan";
let apellido="Perez";
let sueldoActual=99999.99;
let porcentajeAumento=25;
let calculoAumento=(sueldoActual*porcentajeAumento)/100;
let nuevoSueldo=sueldoActual+calculoAumento;
console.log(nombre+", "+apellido+", "+sueldoActual+", "+porcentajeAumento+", "+calculoAumento+", "+nuevoSueldo);
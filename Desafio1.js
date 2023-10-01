/*
Micro-desafío 1:

Instrucciones
1. En Visual Studio Code crear una carpeta de trabajo y dentro de ella crear un archivo
JavaScript (.js).
2. Para llevar un control automatizado en la venta de boletos para ingresar a un
partido de fútbol, el Tech Leader de tu equipo te asigna la responsabilidad de crear y
asignar valor a un conjunto de variables. Recordá tener presente el tipo de dato que
contienen.
A continuación te dejamos algunos ejemplos de variables que puedes crear: Nombre -
Apellido - Edad - Número de Teléfono - Socio (Valor booleano) - Fecha del partido -
Hora del partido - Número de silla - Precio del boleto (con valores decimales).
3. Usando el console.log(), muestra al usuario el valor asignado a cada variable.
4. Finalmente, utilizando el console.log() y el typeof(), muestra al usuario el tipo de
dato de cada una de las variables utilizadas.
Es muy importante no olvidar que para lograr ejecutar todo nuestro código, debes ejecutar en
la consola de Visual Studio Code, la instrucción:

node nombreDelArchivoCreado.js

Ejemplo de código

let nombre = “Gloria”;
console.log(nombre);
console.log(typeof(nombre));
*/

let nombre="Juan";
let apellido="Perez";
let edad=50;
let numeroDeTelefono=3834000000;
let socio=true;
let fechaDePartido="01/01/99";
let horaDePartido="20:00";
let numeroDeSilla=999;
let precioDelBoleto=999.99;
let miArray=[nombre,apellido,edad,numeroDeTelefono,socio,fechaDePartido,horaDePartido,numeroDeSilla,precioDelBoleto];
console.log("- La variable (nombre) tiene el dato: "+nombre+". Y es de tipo: "+typeof nombre);
console.log("- La variable (apellido) tiene el dato: "+apellido+". Y es de tipo: "+typeof apellido);
console.log("- La variable (edad) tiene el dato: "+edad+". Y es de tipo: "+typeof edad);
console.log("- La variable (numeroDeTelefono) tiene el dato: "+numeroDeTelefono+". Y es de tipo: "+typeof numeroDeTelefono);
console.log("- La variable (socio) tiene el dato: "+socio+". Y es de tipo: "+typeof socio);
console.log("- La variable (fechaDePartido) tiene el dato: "+fechaDePartido+". Y es de tipo: "+typeof fechaDePartido);
console.log("- La variable (horaDePartido) tiene el dato: "+horaDePartido+". Y es de tipo: "+typeof horaDePartido);
console.log("- La variable (numeroDeSilla) tiene el dato: "+numeroDeSilla+". Y es de tipo: "+typeof numeroDeSilla);
console.log("- La variable (precioDelBoleto) tiene el dato: "+precioDelBoleto+". Y es de tipo: "+typeof precioDelBoleto);

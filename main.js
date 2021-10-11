var Primero = prompt("INGRESE UN DATO").toUpperCase();
var Resultado = Primero;
var Siguiente = " ";

while (Siguiente != "ESC"){
Siguiente = prompt("INGRESE OTRO DATO").toUpperCase();
Resultado = Resultado + " " + Siguiente;
alert(Resultado);
}
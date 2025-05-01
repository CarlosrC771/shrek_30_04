var nombre = prompt("Cual es tu nombre");
var pelicula = prompt("Qué pelicula te gusta ?");

document.getElementById("nombre").innerHTML = "Hola como estas " + nombre;

if (pelicula === "shrek") {
    document.write('<img src="SHREK.jpg" alt="shrek" width="1000" height="600">');
} else {
    document.write("tu película favorita no es shrek");
}
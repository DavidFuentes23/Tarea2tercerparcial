//Declarar la Variable nombre
var nombre = "David";

//Funcion que cuenta el numero de letras en la variable nombre
function ContarLetras (nombre){
    return nombre.length;
}

//Llamar a la funcion y mostrar el resultado
var numeroDeLetras = ContarLetras (nombre);
console.log("El numero de letras en el nombre es:"+numeroDeLetras);
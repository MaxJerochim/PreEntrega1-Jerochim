var edad = prompt("Bienvenido usuario, por favor ingrese su edad!");

if (edad >= 18 && edad <= 150) {
    alert("Bienvenido a nuestro sistema querido usuario.");

    alert("Usuario, ingrese números. Hasta que esos números no sumen 25 entre si, no lo dejaremos ir.");

    var suma = 0;

    while (suma < 25) {
       var numero = parseInt(prompt("Ingresa un número:"));

       if (isNaN(numero)) {
          alert("Por favor, ingresa un número válido.");
          continue; 
        }

    suma += numero;

    if (suma === 25) {
        alert("Felicitaciones, llego a la suma de 25. O al 25 directamente.");
    }

    if (suma > 25){
        alert("Lo sentimos, se excedio de 25.");
      }
}

} 

else

{
    alert("Lo sentimos mucho, a nuestro sistema solo ingresan mayores de edad, o seres humanos que realmente existan.");
}


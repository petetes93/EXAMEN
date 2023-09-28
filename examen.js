//!EJERCICIO 1
// Comenzamos haciendo una función
// Le damos un nombre "contarLetra" ya que es lo que nos han pedido, despues le damos un valor que en este caso (Frase y Letra)
//1 declaramos función
function contarLetra(frase, Letra) {
  //2 convertimos todas las mayúsculas a minúsculas.
  frase = frase.toLowerCase();
  Letra = letra.toLowerCase();
//3 Como tenemos que hacer que nos cuente, declaramos una variable contador. y le damos un valor de 0 para que comience con por esa posición
    let contador = 0
//4 despues hacemos un bucle for para que vaya identificando y analizando.
//4.1 añadimos la condicional "if" y "===" por que tienen mismo valor y comparten mismo tipo.
//4.2 despues añadimos "contador++" para que sume
//5 return para que este me devuelva el valor final.

    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            contador++;
        }
        
    }
    return contador;
}

//! EJERCICIO 2

//1 lo primero es dar un nombre a la constante para que esta le podamos dar un valor, interpreto que debemos como en otras ocasiones usar parseInt para que este sea un numero entero y seguido de un prompt para que aparezca en pantalla al cargar la imgen con el texto y asi poder escribir
const numeroUsuario = parseInt(prompt("Ingrese un número:"));

//2 pasamos la condicional para identificar si el numero introducido es valido (saber si es un numero o que)

if (isNaN(numeroUsuario)) {
  console.log("Por favor, ingrese un número válido.");
} else {
  //3 Creamos dentro de la condicion "else" un bucle for para identificar si los números por los que pasamos son impares, esto lo identificamos con el %2 !==0 que despues lo imprimimos en consola con el console.log nos imprimirá los siguientes 50 números.
    for (let i = numeroUsuario; i < numeroUsuario + 50; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}


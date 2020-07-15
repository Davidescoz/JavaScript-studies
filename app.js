
let mensaje= "Aprendiendo,HTML, CSS y Javascript para hacer Frontend";

        /*
        console.log(mensaje.length); //Mostrar en pantalla cuantos caracteres tiene un string

        console.log(mensaje.concat(' ', 'Es Genial !!')); //Otra forma de concatenar diferente a $()

        console.log(mensaje.toUpperCase()); //Pasar un texto a Mayuscula

        console.log(mensaje.toLowerCase()); //Pasar un texto a miniscula

        console.log(mensaje.indexOf('Java')); //Buscar en un string ciertas letras o palabras
         */

        console.log(mensaje.substring(3,11)); //Mostrar un rango de caracteres de principio a final

        console.log(mensaje.slice(-11)); // Mostrar un rango de caracteres de final a principio

        console.log(mensaje.split('')); //Crear un array rapido con todos
                                        // los caracteres de un string

        console.log(mensaje.replace('CSS', 'PHP'));

        console.log(mensaje.includes('PHP')); // Es como indexOf()
                                        // pero este mostrara en vez de un numero, un valor boleano

let tegnologia='JavaScript ';
        console.log(tegnologia.repeat(10))
//Function declaration

/*function saludar(nombre) {

        console.log(`Hola ${nombre}`)
}

saludar('Alma');


 */

/*
function sumar(a,b){

    return a+b;

}


let suma;

suma=sumar(3,2)


console.log(suma)


 */



/*
function saludar(nombre='Carolina') {


        return `Hola ${nombre}`
}

console.log(saludar())

 */

//Function Expression

/*
const saludar=function (nombre='Vistante', edad=20, profesion='Desarrollador Web',) {

    return `Hola tienes ${edad} años, trabajas de ${profesion} y te llamas ${nombre}`

}

console.log(saludar('Animalonsio'))

 */

//Funciones IIFE

/*
(function (tegnologia,animal) {
    console.log(`Aprendiendo ${tegnologia} con un ${animal}`)
}('JavaScript','Oso'))


 */


const  musica={

    reproducir:function (id) {

        console.log(`Se esta reproduciendo el video con el id ${id}`);
    },

    pausar:function () {

        console.log(`Pause la musica`);
    }

}

//Agregando datos a una funcion dentro de un objeto externa
musica.borrar=function(id){

    console.log(`Borrando la cancion con el id ${id}`)

}
musica.reproducir(30);
musica.pausar(1);
musica.borrar(2);
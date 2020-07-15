//For loops

/*
    for(let i=0;i < 10; i++){

        if(i == 5){

            console.log('Estas en el numero 5');
            continue; //Sirve para que se muestre el console log en vez del numero en la secuencia

        }
        console.log(`Numero ${i}`)

    }




for(let i=0;i < 10; i++){

    if(i%2==0){


        console.log(`${i} es par`)

    }

    else{

        console.log(`${i} no es par`)


    }

}


const arregloProducto=['Camisa','Boleto','Guitarra','Disco'];

for(let i=0;i < arregloProducto.length; i++){

    console.log(`Tu producto ${arregloProducto[i]} fue agregado`);

}




// <------------------------------------------------WHILE------------------------------------------------->

const musica=['Cancion 1','Cancion 2', 'Cancion 3'];
let i=0;

    while(i < musica.length){

        console.log(`Reproduciendo la ${musica[i]}`)
        i++;

    }



let i=0;

do{

    console.log(`Numero ${i}`)
    i++;

}
while(i < 10){



}



const pendientes= ['Tarea','Comer','Proyecto','Aprender','JavaScrip'];


    pendientes.forEach(function (pendientes,index) {

            console.log(`${index} : ${pendientes}`)
                //Mostrar indice
    })



// <------------------------------------------------MAP------------------------------------------------->
const carrito = [
        {id:1,producto: 'Libro'},
        {id:2,producto: 'Camisa'},
        {id:3,producto: 'Guitarra'},
        {id:4,producto: 'Disco'}

];


const nombreProducto=carrito.map(function (carrito) {

            return carrito.producto;
})

    console.log(nombreProducto)




//Recorriendo un objeto con for
const automovil={
        modelo: 'Camaro',
        motor: 6.1,
        anio: 1969,
        marca:'Chevrolet'

}

for(auto in automovil){

    console.log(`${auto}: ${automovil[auto]}`)


}

 */



//const ciudades=['Medellin','New Mexico','California','Chicago'];
//const ordenes= new Set([123, 234, 512, 102]);
//const datos= new Map();
//datos.set('nombre','Juan');
//datos.set('profesion','Desarrollador Web');

//Entries a las ciudades

//for (let entrada of ciudades.keys()){//Keys devuelve solo la clave del arreglo si medellin esta en la posicion 0
                                        //Solo devolvera el 0 pero no medellin


    //console.log(entrada);

//}



/*
for(let entradas of ordenes.values()){ //Value regresa solo valores ignora las llaves, entries muestra el arreglo completo

    console.log(entradas)


}


 */

//Entries para el Map

/*
    for(let entrada of datos.entries()){

        console.log(entrada)

    }






const social= document.getElementsByTagName('a');


    for(entrada of social){


        console.log(entrada.href)

    }



 */


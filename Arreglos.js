

//Arreglos


//const numeros=[10,20,30,40,50,60];

    //console.log(numeros)

//Areglo con strings metodos alternativos

const meses= new Array('Enero','Febrero','Marzo','Abril');

    //console.log(Array.isArray(meses))

//Arreglo Mezclado

    //const mezcla=['hola',2, undefined ,true ,null ,false]

//Agregar un Arreglo fuera
meses [4]='Mayo';

//Agregar un objeto al final del arreglo
meses.push('Junio')


//Agregar al inicio de un arreglo
meses.unshift('Mes 0')

//Eliminar un elemento de un arreglo (el final)

meses.pop();

//Eliminar un elemento de un arreglo (el inicio)

meses.shift();

//Quitar un rango

meses.splice(2,1)

//Revertir

meses.reverse();


//Unir dos arreglos

//let arreglo1=[1,2,3],
        arreglo2=[4,5,6];

//console.log(arreglo1.concat(arreglo2));


//console.log(meses)

const frutas=['Platano','Manzana','Fresa','Naranja','Zanahoria'];


//Organizar un arreglo por orden alfabetico
frutas.sort();



//console.log(frutas);


//Ordenar por numeros.

const arreglo1= [3,9,91,92,23,45,21,56,1,100,10]

arreglo1.sort(function (x,y) {

    return x-y;

});

//console.log(arreglo1)


const numeros = [1,2,3];

numero[0]=4;

numeros.push(5);

console.log(numeros);



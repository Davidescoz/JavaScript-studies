// Eliminar de Local Storage
/*
localStorage.clear();

let elemento;

elemento=document
elemento=document.all;
//elemento=document.head; //Regresara todo el head del elemento html
elemento=document.body; //Regresara todo el body del elemento
//Regresa la url del sitio actual
elemento=document.domain ;
elemento=document.URL;
//Mostrar formato de codificacion de caracteres
elemento=document.characterSet; //En el caso de español devolvera solo UTF-8
//Mostrar formularios
elemento=document.forms;
elemento=document.forms[0].id;
elemento=document.forms[0].className;
elemento=document.forms[0].classList;
elemento=document.forms[0].classList[0];
//Mostrar toda la cantidad de imagenes en el elemento

elemento=document.images;
elemento=document.images[2];
elemento=document.images[2].src; //Traer el src de una imagen

elemento=document.images[2].getAttribute('src');

//Mostrar scripts

elemento=document.scripts;

let imagenes=document.images;

imagenes=Array.from(imagenes);

imagenes.forEach(function (imagen) {
        console.log(imagen)
})

console.log(imagenes);






//Manipulando contenido en DOM

    let contenido;

    contenido=document.getElementById('encabezado');
    contenido.style.background='#333';
    contenido.style.color='white';
    contenido.textContent='Ayuwonki, Ayowunki';
    contenido.style.padding='20px'

    console.log(contenido);






//Query Selector : Es un manera mejor que getElementById ya que esta puede usar clases y ids
// De la forma que se llaman en CSS

    const encabezado= document.querySelector('#encabezado');


    encabezado.style.background='#333';
    encabezado.style.padding='20px';
    encabezado.style.color='white';
    encabezado.textContent='Ayuwonky, hehe';



    console.log(encabezado)




//Query Selector nos permite usar cambios en el contenido de CSS3 como hover y otros elementos
//Ejemplo:

let enlace;

enlace=document.querySelector('#principal a:first-child');

enlace=document.querySelector('#principal a:nth-child(3)');


console.log(enlace);





//document.getElementByClassName nos retorna todas los elementos que esten asociados con el nombre de la clase
//Igual que QuerySelectorAll Ejemplo

//Este ejemplo fue hecho por mi y es convertir la variable enlaces a un array con Array.from
//Y luego recorrerlo con un forEach

let enlaces;

enlaces=document.getElementsByClassName('enlace');

enlaces=Array.from(enlaces);

enlaces.forEach(function (enlace) {
    console.log(enlace);
})

console.log(enlaces);



//Acediendo a los elementos individuales de una clase como si fuera un array
let enlaces;

enlaces=document.getElementsByClassName('enlace')[3];


//enlaces=enlaces[0];

console.log(enlaces);




//Traera las etiquetas de HTML en este caso <a> que es de enlaces.
const links= document.getElementsByTagName('a');


let enlaces=Array.from(links); //Convirtiendo a Array

enlaces.forEach(function (enlace) {
    console.log(enlace.textContent); //Mostrando los textos que estan en la en la etiqueta <a>
})

    console.log(links);





    const enlaces=document.querySelectorAll('#principal .enlace'); //Selecionando la clase enlace
                                                                    //del id principal

    enlaces[1].style.background='red';
    enlaces[1].style.color='white';

    console.log(enlaces);



    const enlaces=document.querySelectorAll('#principal a:nth-child(odd)'); //Odd muestra solo los
                                                                            //numeros impares en CSS

    enlaces.forEach(function (impares) {

            impares.style.background='red';
            impares.style.color='white';
    })

    console.log(enlace);


//Travensing


const navegacion=document.querySelector('#principal');



    console.log(navegacion.children[0].textContent='Nuevo Enlace');



    //Node type devuelve el tipo de nodo en numero  ejm:


    //1=Elementos
    //2=Atributos
    //3= Text Node
    //8= Comentarios
    //9= Documentos
    //10= Doctype






const cursos=document.querySelectorAll('.card');


console.log(cursos[0].firstElementChild);
console.log(cursos[0].lastElementChild);
console.log(cursos[0].childElementCount);




//Del hijo al papa


    //parentElement y parentNode sirven para ir del hijo al padre

    const enlaces=document.querySelectorAll('.enlace');

    console.log(enlaces[0].parentElement);





const cursos=document.querySelectorAll('.card');

console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent='Hola a todos');




//previousElementSibling
const enlaces= document.querySelectorAll('.enlace');

console.log(enlaces[4].previousElementSibling.previousElementSibling.previousElementSibling);

//

console.log(enlaces[0].nextElementSibling.nextElementSibling.previousElementSibling.parentElement.children[0]);




//Crear Elemento

const enlaces= document.createElement('a');


enlaces.setAttribute('href','#');

enlaces.className= 'enlace';

enlaces.id='Nuevo-id';

enlaces.textContent='Nuevo enlace';

document.querySelector('#secundaria').appendChild(enlaces); //Inyectar elemento en el hijo








//Remplazar Elemento

//Crear el elemento
const nuevoEncabezado= document.createElement('h2');

//Asignar un id al nuevo elemento
nuevoEncabezado.id='encabezado';

//Crear un texto para el nuevo elemento
nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));

//Elemento anterior(sera remplazado)

const anterior=document.querySelector("#encabezado");

const elPadre=document.querySelector('#lista-cursos');

elPadre.replaceChild(nuevoEncabezado,anterior);


console.log(anterior.parentElement)


//Eliminado elementos del DOM con JS

const enlaces=document.querySelectorAll(".enlace");


const menu=document.querySelector('#principal');

//enlaces[0].remove();

//Eliminar desde el padre

    menu.removeChild(enlaces[0]);

 */

    const primerLi=document.querySelector('.enlace');

    let elemento;

    //Obtener una clase de css

    elemento=primerLi.classList;
    elemento=primerLi.className;

    //añadir nueva clase

    elemento=primerLi.classList.add('nueva-clase');
    elemento=principal.classList.remove('nueva-clase');

    //Añadir y obtener atributos

    //Añadiendo atributos al DOM
    elemento=primerLi.setAttribute('href','http://www.facebook.com');
    elemento=primerLi.setAttribute('data-id','20');

    //Comprobar que un atributo existe en el DOM
    elemento=primerLi.hasAttribute('data-id');

    //Eliminar un atributo del DOM
    elemento=primerLi.removeAttribute('data-id');

    elemento=primerLi;

    console.log(elemento);

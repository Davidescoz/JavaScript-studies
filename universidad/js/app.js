    /*
    document.querySelector('#submit-buscador').addEventListener('click',function (e) {

            //Prevenir que un formulario ejecute acciones por default
            e.preventDefault();
            alert('Buscando Cursos');

    })




    document.querySelector('#submit-buscador').addEventListener('click',ejecutarBoton);


    function ejecutarBoton(e){

        e.preventDefault();
        //Ronaldiño jeje
        alert('a partir da função de alerta de execução');
        let elemento;
        elemento=e;
        elemento=e.target;
        elemento=e.target.id;
        elemento=e.target.className;

        //Mostrara por consola el evento mouse
        console.log(elemento);

    }

     */

    document.querySelector('#encabezado').addEventListener('click',function (e) {

        e.target.innerText='Nuevo Encabezado';


    })
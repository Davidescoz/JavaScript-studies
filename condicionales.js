
/*
const edad=18

if (edad >= 18 ){

    console.log('Si puedes entrar al sitio');

}

else{


    console.log('No puedes entrar al sitio');

}



let puntaje;

    puntaje=1000;

    if(puntaje!=undefined){


        console.log(`Si el puntaje es de ${puntaje}`);

    }

    else{

        console.log('Puntaje no existe');

    }



let efectivo=200;
let carrito=300;
let restante=(carrito-efectivo)

    if(efectivo < carrito){

        console.log(`Usted no tiene fondos suficientes para hacer la compra, necesita ${restante} mas `);

    }

    else{

        console.log('La compra ha sido exitosa!!');

    }

 */

/*
let hora=25;

    if(hora > 0 && hora <= 11){

        console.log('Buenos dias');

    }

    else if(hora > 12 && hora <= 18){

        console.log('Buenas tardes');

    }

    else if(hora > 19 && hora <= 24){

        console.log('Buenas tardes');

    }

    else {

        console.log('Hora no valida');

    }



let puntaje;

puntaje=100

if(puntaje < 150){

    console.log('Puntaje es < a 150'); //Aunque las condiciones sean con el mismo objetivo solo se cumplira una y es la
    //menor a 150 por que es la primera que lee

}

else if(puntaje < 200 ){

    console.log('Puntaje es < a 200');

}






let totalCarrito=500,
    efectivo=300,
    credito=300,
    disponible=efectivo+credito;

    if(efectivo > totalCarrito || credito > totalCarrito || totalCarrito < disponible){

            console.log('Puede pagar')

    }


    else{

        console.log('No puede pagar pa procredito');

    }



//Ternario

const logueado=false;
                //Es un if en una sola linea

    console.log(logueado === true ? 'Si se logueo':'No se logueo');
                                    //Este seria if: Este seria Else

 */

//<-------------------------------------------SWITCH----------------------------------------------->

let mes;

    switch (new Date().getMonth()) {
        case 0:
            mes='Enero'
            break;
        case 1:
            mes='Febrero'
            break;
        case 2:
            mes='Marzo'
            break;
        case 3:
            mes='Abril'
            break;
        case 4:
            mes='Mayo'
            break;
        case 5:
            mes='Junio'
            break;
        case 6:
            mes='Julio'
            break;

        case 7:
            mes='Agosto'
            break;

        case 8:
            mes='Septiembre'
            break;

        case 9:
            mes='Octubre'
            break;
        case 10:
            mes='Noviembre'
            break;

        case 11:
            mes='Diciembre'
            break;
    }

console.log(mes);
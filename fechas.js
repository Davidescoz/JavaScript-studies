/*
//Fecha Actual
const fecha= new Date();

//Fecha en especifico
let navidad2017=new Date('12-25-2019');


console.log(fecha);
console.log(navidad2017);


 */

    let fechaHoy=new Date();

    let valor;

    //Este valor Regresa mes
    valor=fechaHoy.getMonth();
    //Estos metodos regresan dias
    valor=fechaHoy.getDate();

    valor=fechaHoy.getDay();

    //Obtener el año
    valor=fechaHoy.getFullYear();
    //Obtener Minutos
    valor=fechaHoy.getMinutes();
    //Obtener hora
    valor=fechaHoy.getHours();

    //Milisegundos desde 1970
    valor=fechaHoy.getTime();

    valor=fechaHoy.getFullYear();
    valor=fechaHoy.setFullYear(2018);
    valor=fechaHoy.getFullYear();

    console.log(valor);

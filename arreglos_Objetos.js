
const autos=[
    {modelo:'Mustang',motor:6.0},
    {modelo:'Toyota',motor:6.1},
    {modelo:'Audi',motor:6.2},

];

autos[0].modelo='Chevrolet'; //Modificar el primer objeto de un arreglo

for(let i=0;i < autos.length;i++){


    console.log(`${autos[i].modelo} ${autos[i].motor}`);

}


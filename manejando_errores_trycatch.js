
//Intenta ejecutar una funcion y si no ejecuta el resto del codigo normalmente
try{
    
    algo();
    
}

catch (error) {

    console.log(error)
}

finally {
    console.log('No le importa lo ejecuta de todos modos ')
}


function obtenerClientes(){

    console.log('Descargando...')

    setTimeout(function(){


        console.log('Completado')


    },3000)
}

obtenerClientes()
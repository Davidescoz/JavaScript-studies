//Objetos en Javascript

const persona={
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Diseñador Grafico',
    email: 'gmail@gmail.com',
    edad: 20,
    musica:['Trance','Rock','Grunge'],
    hogar:{

        pais: 'Colombia',
        ciudad: 'Medallo'


    },

    fechaEdad:function () {

        return new Date().getFullYear()- this.edad //Traer fecha actual menos edad

    }

}

const persona2={
    nombre: 'Miguel',
    apellido: 'Martinez',
    profesion: 'Diseñador Grafico',
    email: 'gmail@gmail.com',
    edad: 30,
    musica:['Trance','Rock','Grunge'],
    hogar:{

        pais: 'Colombia',
        ciudad: 'Medallo'


    },

    fechaEdad:function () {

        return new Date().getFullYear()- this.edad //Traer fecha actual menos edad

    }

}
    persona.musica.push('Clasica');
    console.log(persona2.fechaEdad());
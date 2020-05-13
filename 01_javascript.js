var json2 = {
    nombre: 'Ayrton',
    edad: 25,
    soltero: true,
    fecha: new Date('199/04/02'),
    interese: {
        hobbies: [
            'futbol',
            'ps4'
        ],
        peliculas: [
            {
                nombre: 'Avangers',
                tipo: 'Accion',
                esBuena: true,
            },
            {
                nombre: 'Dragonball',
                tipo: 'Anime',
                esBuena: true,
            }
        ]
    },
    familia: [
        {
            nombre: 'Ayrton',
            edad: 23,
        },
        {
            nombre: 'Axel',
            edad: 15,
        }
    ]
}

// stringify

var json2String = JSON.stringify(json2)
console.log(json2)
console.log(json2String)

// Parse

var jsonParse = JSON.parse(json2String)
console.log(jsonParse)





/*console.log(json.nombre)
console.log(json['edad'])

json.nombre = 'nuevo' 

json.direccion = 'solanda'

console.log(json)

delete json.direccion*/




/*console.error()
console.info()
console.warn()*/

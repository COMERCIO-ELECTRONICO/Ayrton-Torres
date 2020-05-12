// DEBER
/*
usar un arreglo de json (nombre, edad, fechaNacimiento, Telf)
- callback crear UN USUARIO (JSON) -> buscar en si ya existe debe impirmir q ya existe y sino crearlo
- callback editar un usuario
- callback eliminar un usuario
- callback listar usuario
*/

var jsonArreglo = [
    {
    nombre: 'Ayrton',
    edad: '23',
    fechaNacimiento: new Date('1997/04/02'),
    Telf: '0994460774',
    },
    {
        nombre: 'Axel',
        edad: "15",
        Fecha_Nacimiento: new Date("2005/03/25"),
        Telf: '09838856452',
    } 
]
console.log(jsonArreglo);
console.log("----------------------------------------")
 
function anadirUser(arreglo, user, indice, cb) {
    
    arreglo[indice] = user
    cb(
        {
            mensaje: 'Datos ingresados exitosamente',
            arreglo
        }
    )
}
anadirUser(jsonArreglo, { nombre: "Ayrton", edad: "23", fecha_Nacimiento: "1997/04/02", Telf: "0983545141"}, 0, (mensaje) => {
    console.log(mensaje)
});

    console.log("----------------------------------------")



    function listarUser(arreglo, cb) {
    arreglo.forEach( user =>{
    console.log(user)
    })
    cb({
        mensaje: "Los Datos estan enlistados"
    })
}
   listarUser(jsonArreglo, (mensaje) => { console.log(mensaje) 
}
   );
   console.log("----------------------------------------")


   function editarUser(arreglo, user, indice, cb) {
    arreglo[indice] = user
    cb({
        mensaje: "--- Usuarios Editados  ---",
        arreglo
    }
    )
}

editarUser(jsonArreglo, { nombre: " ", edad: " ", fecha_Nacimiento: " ", Telf: " " }, 2, (mensaje) => {
    console.log(mensaje)
});
console.log("----------------------------------------")


function eliminarUser(arreglo, user, indice, cb) {
    arreglo[indice] = user
    cb({
        mensaje: "Users Eliminados ",
        arreglo
    }
    )
}
eliminarUser(jsonArreglo, "--- CAMPO ELIMINADO ---" , 0, (mensaje) => {
    console.log(mensaje)
})
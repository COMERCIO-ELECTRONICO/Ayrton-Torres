var PALABRA='COMERCIO ELECTRONICO';
function StringReversa(str){
    return str.split('').reverse().join('');
}
console.log('PALABRA: COMERCIO ELECTRONICO');
console.log('------ REVERSA ------');
console.log(StringReversa("COMERCIO ELECTRONICO"))
console.log('<<<--------------------------------->>>');
 

/*Realiza fotografías de 20 megapíxeles y
puede utilizar un perfil de color Dlog-M
de 10 bits, con el que se obtiene un rango
dinámico más amplio al registrar hasta mil millones de
colores. Esto queda bastante por encima de los 16 millones de
colores de los perfiles de 8 bits, pudiendo dejar más margen y
libertad en la edición posterior del material.
Por su parte, el Mavic 2 Zoom cuenta con
un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto.
En este caso es capaz de realizar capturas de 12 megapíxeles,
disponiendo un zoom automático híbrido (que combina detección de fase y contraste)
de una función de "Superresolución" que recurre al zoom óptico para realizar nueve
fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle).*/

  
var parrafo = 'Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido (que combina detección de fase y contraste) de una función de "Superresolución" que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle).'


var MAYUSCULA = parrafo.split(" ")[0].toUpperCase();
console.log('PRIMERA PALABRA EN MAYUSCULA ES: ');
console.log(MAYUSCULA);
console.log('<<<--------------------------------->>>');


var MITAD_PALABRA = parrafo.split(" ");
var mitad = MITAD_PALABRA[(MITAD_PALABRA.length - 1) / 2].toUpperCase();
console.log('LA PALABRA DE LA MITAD EN MAYUSCULA ES: ');
console.log(mitad);
console.log('<<<--------------------------------->>>');


var  MAYUSCULA_FINAL = parrafo.split(" ");
var Ultima = MAYUSCULA_FINAL[MAYUSCULA_FINAL.length - 1].toUpperCase();
console.log('ULTIMA PALABRA EN MAYUSCULA ES: ');
console.log(Ultima);
console.log('<<<--------------------------------->>>');


console.log(parrafo.split(',').length-1 +" Comas");
console.log('<<<--------------------------------->>>');
console.log(parrafo.split('.').length-1 +" Puntos");

  


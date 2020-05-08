/*JSON
{
    arreglos: {
        uno: [2, 4, 5, 8, 6, 9, 10],
       */
   
   
  var json = [2, 4, 5, 8, 6, 9, 10];
var arregloNumero = json
.map(
    (item)=>{
        console.log(item);
        return item * 2;
    }
)
console.log(arregloNumero)

var jsonFilter = json
.filter(
    (item) => {
        console.log(item);
        return item === 4 || item === 8 || item === 6 || item === 10;
    }
)
console.log(jsonFilter);

/*dos: [
    {valor: 1},
    {valor: 4},
    {valor: 2},
    {valor: 24},
    {valor: 100},
    {valor: 23},
    {valor: 45},
    {valor: 23}
],
}*/

  
var jsondos= [{valor: 1},
    {valor: 4},
    {valor: 2},
    {valor: 24},
    {valor: 100},
    {valor: 23},
    {valor: 45},
    {valor: 23}]

var dos= [];
 
for (var i = 0, max =jsondos.length; i < max; i += 1) {
     dos.push(jsondos[i].valor);
 
}
console.log(dos);

var arreglojson = dos
    .map(
        (item) => {
            
                return item + 2;    
          }
    )
    console.log ("**********  +2  **********"); 
    console.log (dos); 
    console.log (arreglojson); 

    var arregloFilter = arreglojson
    .filter(
        (item) => {


            if (item%2 != 0) {
             return item;   
            } 
            
        }
    )
    console.log ("********* Filter Impar **********"); 
    console.log (arreglojson); 
console.log (arregloFilter);



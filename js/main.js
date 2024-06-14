alert("bienvenidos a mi pagina web")

let nombre = "juan ma sneakers ";

alert(nombre);

let descripcion = "indicaras la cantidad de sneakers compradas";

alert(descripcion)

function calcularCostoTotal() {
    const cantidadDeProductos = parseInt(
     prompt("ingrese la cantidad de prendas")
   );
 
   let costoTotal = 0;
   
   for (let i = 1; i <= cantidadDeProductos; i++) {
     const precioProducto = parseFloat(
       prompt(`Ingrese el precio del producto ${i}:`)
     );
     
     
     if (!isNaN(precioProducto) && precioProducto > 0) {
       costoTotal += precioProducto;
     } else {
       alert("El precio ingresado es inválido. Inténtelo nuevamente.");
       i--;
     }
   }
   alert(`El costo total de los productos es: $${costoTotal.toFixed(2)}`);
 }
 
 calcularCostoTotal();

 let gracias = " !gracias por confiar en nosotros¡ "

 alert(gracias)
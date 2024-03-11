class CarritoCompra {
  constructor() {
    this.productos = [];
  }
  agregarProducto(objProducto){
    this.productos.push(objProducto)
  }
  calcularTotal(){
    let total = 0;
    this.productos.forEach(objProducto => {
        total += objProducto.precio * objProducto.cantidad;
    });
    return total;
}
aplicarDescuento(descuento){
    if(descuento > 100 || descuento < 0) return "Ingresar un valor del 1 al 100";
    if(descuento === 100) return 0;
    
    let total=0;
    this.productos.forEach(objProducto => {
        total += objProducto.precio * objProducto.cantidad;
    });

    if(descuento === 0) return total;

    let monto = total - (total * (descuento/100))

    return monto;
  }
}

module.exports = CarritoCompra;

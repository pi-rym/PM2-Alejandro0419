/*
Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

constructor(): Inicializa el carrito como un array vacío.

agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.

_________________________________________________________________________

describe('Este test debe pasar siempre',() => {
    it('True debe ser true',()=>{
        expect(true).toBe(true);
    })
})
*/
const CarritoCompra = require("./index");
//const jestMock = require('jest-mock'); // Declaro una variable / funcion mock sin target (?)

//const spy = jest.spyOn(CarritoCompra.prototype, 'constructor');

//const mock = jest.fn();
const mockCarroCompra = jest.fn(CarritoCompra); //hago mock del constructor para ver cuantas veces es llamado

describe('La clase "CarritoCompra" debe: ', () => {
  /*beforeEach(() => {
});*/
  it("Deberia ser una clase", () => {
    expect(typeof mockCarroCompra.prototype.constructor).toBe("function");
  });

  it('Tener el modulo "constructor" que inicializa el carrito como un array vacío.', () => {
    const carrito = new CarritoCompra();
    expect(carrito).toBeInstanceOf(CarritoCompra);
    expect(carrito.productos).toEqual([]);
  });

  /*expect(mock).toHaveBeenCalled();*/
  //expect(mockConstructor).toHaveBeenCalled();

  it('Debe tener el metodo "agregarProducto"', () => {
    expect(typeof mockCarroCompra.prototype.agregarProducto).toBe("function");
  });

  it('Debe tener el metodo "calcularTotal"', () => {
    expect(typeof mockCarroCompra.prototype.calcularTotal).toBe("function");
  });

  it('Debe tener el metodo "aplicarDescuento"', () => {
    expect(typeof mockCarroCompra.prototype.aplicarDescuento).toBe("function");
  });

  it('El metodo "agregarProducto" recibe un objeto representando un producto y lo agrega al carrito', () => {
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: "Lechuga", precio: 10, cantidad: 2 });
    expect(carrito.productos).toEqual([{ nombre: "Lechuga", precio: 10, cantidad: 2 }]);
  });
  
  it('El metodo "calcularTotal" Calcula el total de la compra sumando los precios de todos los productos en el carrito', ()=>{
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: "Lechuga", precio: 10, cantidad: 2 })
    carrito.agregarProducto({ nombre: "Tomate", precio: 20, cantidad: 1 })
    expect(carrito.calcularTotal()).toHaveReturnedWith(40);
  })
  it('El metodo "calcularTotal" Calcula el total de la compra sumando los precios de todos los productos en el carrito', ()=>{
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: "Sandia", precio: 30, cantidad: 1 })
    carrito.agregarProducto({ nombre: "Banana", precio: 5, cantidad: 7 })
    expect(carrito.calcularTotal()).toHaveReturnedWith(65);
  })
  it('El metodo "calcularTotal" Calcula el total de la compra sumando los precios de todos los productos en el carrito', ()=>{
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: "Milanesa", precio: 10, cantidad: 5 })
    carrito.agregarProducto({ nombre: "Zapallo", precio: 20, cantidad: 1 })
    
    expect(carrito.calcularTotal()).toHaveReturnedWith(70);
  })
  
  
  it('El metodo "aplicarDescuento" Aplica un descuento al total de la compra según el porcentaje especificado.', ()=>{
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: "Milanesa", precio: 10, cantidad: 5 })
    carrito.agregarProducto({ nombre: "Zapallo", precio: 20, cantidad: 1 })
    expect(carrito.aplicarDescuento(50)).toHaveReturnedWith(35);
  })
  
  it('El metodo "aplicarDescuento" Aplica un descuento al total de la compra según el porcentaje especificado.', ()=>{
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: "Milanesa", precio: 10, cantidad: 5 })
    carrito.agregarProducto({ nombre: "Zapallo", precio: 20, cantidad: 1 })
    expect(carrito.aplicarDescuento(100)).toHaveReturnedWith(0);
  })
  
  it('El metodo "aplicarDescuento" Aplica un descuento al total de la compra según el porcentaje especificado.', ()=>{
    const carrito = new CarritoCompra();
    carrito.agregarProducto({ nombre: "Milanesa", precio: 10, cantidad: 5 })
    carrito.agregarProducto({ nombre: "Zapallo", precio: 20, cantidad: 1 })
    expect(carrito.aplicarDescuento(0)).toHaveReturnedWith(70);
  })

  
});

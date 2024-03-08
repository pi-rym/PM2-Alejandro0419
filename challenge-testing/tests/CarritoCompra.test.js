/*
Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. La clase debe tener los siguientes métodos:

constructor(): Inicializa el carrito como un array vacío.

agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente en diferentes escenarios.

describe('Este test debe pasar siempre',() => {
    it('True debe ser true',()=>{
        expect(true).toBe(true);
    })
})
*/
const CarritoCompra = require('./index');
//const jestMock = require('jest-mock'); // Declaro una variable / funcion mock sin target (?)

//const spy = jest.spyOn(CarritoCompra.prototype, 'constructor');

const mock = jest.fn();
CarritoCompra.prototype.carrito= mock(); //hago mock del constructor para ver cuantas veces es llamado

describe('La clase "CarritoCompra" debe: ', () => {
    beforeEach(()=>{
    })
    it('Deberia ser una clase',()=>{
        expect(typeof CarritoCompra.prototype.constructor).toBe("function")
    })
    
    it('Tener el modulo "constructor"', ()=>{
        carrito = new CarritoCompra();
        expect(mock).toHaveBeenCalled();
        expect(carrito).toBeInstanceOf(CarritoCompra);
    })
})


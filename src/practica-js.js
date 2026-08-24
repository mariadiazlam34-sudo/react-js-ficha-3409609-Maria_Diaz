
const productos = [
    { id: 1, nombre: 'Camiseta', precio: 50000, categoria: 'Ropa', stock: 5 },
    { id: 2, nombre: 'Pantalon', precio: 90000, categoria: 'Ropa', stock: 0 },
    { id: 3, nombre: 'Zapatos', precio: 150000, categoria: 'Calzado', stock: 3 },
    { id: 4, nombre: 'Chaqueta', precio: 180000, categoria: 'Ropa', stock: 4 },
    { id: 5, nombre: 'Gorra', precio: 35000, categoria: 'Accesorios', stock: 8 },
    { id: 6, nombre: 'Bolso', precio: 120000, categoria: 'Accesorios', stock: 0 },
    { id: 7, nombre: 'Vestido', precio: 140000, categoria: 'Ropa', stock: 6 },
    { id: 8, nombre: 'Sandalias', precio: 75000, categoria: 'Calzado', stock: 10 },
    { id: 9, nombre: 'Botas', precio: 220000, categoria: 'Calzado', stock: 2 },
    { id: 10, nombre: 'Bufanda', precio: 45000, categoria: 'Accesorios', stock: 7 }
];
// RETO 8

const productoActualizado = {
    ...productos[0],
    precio: 70000,
    stock: 10
};
const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(`El producto ${productoActualizado.nombre} cuesta $${productoActualizado.precio} y está ${estado}.`);





 

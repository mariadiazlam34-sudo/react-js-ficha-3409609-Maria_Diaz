export const productos = [
{ id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Perifericos', stock: 5 },
{ id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Perifericos', stock: 0 },
{ id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
{ id: 4, nombre: 'Audifonos', precio: 120000, categoria: 'Audio', stock: 8 },
{ id: 5, nombre: 'Webcam', precio: 150000, categoria: 'Camaras', stock: 4 },
{ id: 6, nombre: 'Parlantes', precio: 180000, categoria: 'Audio', stock: 0 },
{ id: 7, nombre: 'Disco SSD', precio: 250000, categoria: 'Almacenamiento', stock: 6 },
{ id: 8, nombre: 'Memoria RAM', precio: 170000, categoria: 'Componentes', stock: 10 },
{ id: 9, nombre: 'Laptop', precio: 2500000, categoria: 'Computadores', stock: 2 },
{ id: 10, nombre: 'Microfono', precio: 130000, categoria: 'Audio', stock: 7 }
];

console.log("=== PRODUCTOS DISPONIBLES ===");
const productosDisponibles = inventario.filter(producto => producto.disponible);
console.log(productosDisponibles);
const hayAgotados = inventario.some(producto => !producto.disponible || producto.stock === 0);
console.log(`¿Existe al menos un producto agotado?: ${hayAgotados ? "Sí" : "No"}`);
const valorTotalInventario = inventario.reduce((acumulador, producto) => {
  return acumulador + (producto.precio * producto.stock);
}, 0);

console.log(`Valor total del inventario: $${valorTotalInventario}`);
function buscarProducto(id) {
  const productoEncontrado = inventario.find(producto => producto.id === id);
  return productoEncontrado ? productoEncontrado : `Producto con ID ${id} no encontrado.`;
}
console.log(buscarProducto(4)); 

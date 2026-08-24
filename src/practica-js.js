//SUMA
function RealizarSuma(a, b) {const Suma= a + b;return Suma;}
const resultado_suma = RealizarSuma(5, 2);
console.log(resultado_suma);
//RESTA
function RealizarResta(a, b) {const Resta= a - b;return Resta;}
const resultado_resta = RealizarResta(5, 2);
console.log(resultado_resta);
//MULTIPLICACION
function Realizar_Multiplicacion(a, b) {const Multi= a * b;return Multi;}
const resultado_multi = Realizar_Multiplicacion(5, 2);
console.log(resultado_multi);
//DIVISION
function RealizarDivision(a, b) {const Division= a / b;return Division;}
const resultado_Division = RealizarDivision(5, 2);
console.log(resultado_Division);
// PROMEDIO
function calcularPromedio(nota1, nota2,nota3) {const total = (nota1 + nota2 + nota3)/3;return total;}
const resultado = calcularPromedio(1,2,3);
console.log(resultado)
// Console log muestra un valor o mensaje en la consula y Return devuelve un valor para poder usarlo despues
 
//RETO 2
const cuadrado = (numero) => {
    return numero * numero;
};
const MayorEdad = Edad => Edad >= 18;

const NombreCompleto = (Nombre,apellido) => {
return Nombre + apellido;
};
console.log(cuadrado(2));
console.log(MayorEdad(19));
console.log(NombreCompleto('maria','diaz'));
//RETO 3
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

// RETO 4
productos.forEach((producto, indice) => {
console.log(`${indice+1}.  ${producto.nombre}- ${producto.precio}- stock:${producto.stock}`);
});
// RETO 5

const precios = productos.map(producto => producto.precio * 1.19);
console.log(precios);

const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
console.log(nombresMayuscula);

const resumenProductos = productos.map(producto => `${producto.nombre} cuesta $${producto.precio}`);
console.log(resumenProductos);
// RETO 6

const disponible = productos.filter(producto => producto.precio > 100000);

const productosRango = productos.filter(producto =>
    producto.precio >= 50000 && producto.precio <= 200000
);

const productosRopa = productos.filter(producto =>
    producto.categoria === 'Ropa'
);

const producto5 = productos.find(producto => producto.id === 5);

const buscarProducto = id => {
    return productos.find(producto => producto.id === id);
};

console.log(disponible);
console.log(productosRango);
console.log(productosRopa);
console.log(producto5);
console.log(buscarProducto(5));

// RETO 7
const hayAgotados = productos.some(producto => producto.stock === 0);
console.log("¿Hay productos agotados?", hayAgotados);

const hayProductoMillonario = productos.some(producto => producto.precio > 1000000);
console.log("¿Hay productos con precio mayor a $1.000.000?", hayProductoMillonario);

const preciosValidos = productos.every(producto => producto.precio > 0);
console.log("¿Todos tienen precio mayor que cero?", preciosValidos);

const stockValido = productos.every(producto => producto.stock >= 0);
console.log("¿Todos tienen stock válido?", stockValido);

const valorInventario = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0
);
console.log("Valor total del inventario:", valorInventario);
// RETO 8
const productoActualizado = { ...productos[0], precio: 70000, stock: 10 };
const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';
console.log(`El producto ${productoActualizado.nombre} cuesta $${productoActualizado.precio} y está ${estado}.`);




const formatearPrecio = (precio) => {
  return precio.toLocaleString("es-CO");
};


const obtenerEtiquetaPrecio = (precio) => {
  if (precio < 50000) return "Económico";
  if (precio > 500000) return "Premium";
  return null;
};

function ProductoCard({ producto }) {
  
  const { nombre, precio, categoria, stock } = producto;

  const estado = stock > 0 ? 'Disponible' : 'Agotado';
  const etiquetaPrecio = obtenerEtiquetaPrecio(precio);

  
  const mostrarProducto = () => {
    alert(`Seleccionaste ${nombre}`);
  };

  return (
    <article className="producto-card">
      <h2>{nombre}</h2>
      <p>Categoría: {categoria}</p>
      <p>Precio: ${formatearPrecio(precio)}</p>
      {etiquetaPrecio ? <p className="etiqueta-precio">{etiquetaPrecio}</p> : null}
      <p>Stock: {stock}</p>
      <strong>{estado}</strong>
      <br />
      {}
      <button onClick={mostrarProducto} disabled={stock === 0}>
        {stock > 0 ? "Ver producto" : "Agotado"}
      </button>
    </article>
  );
}

export default ProductoCard;
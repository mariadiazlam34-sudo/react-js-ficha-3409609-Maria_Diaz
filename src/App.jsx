import { useState } from 'react';
import ProductoCard from './components/ProductoCard';
import { productos } from './data/productos';
import './App.css';

function App() {
  const disponibles = productos.filter(producto => producto.stock > 0);
  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );

  
  const [busqueda, setBusqueda] = useState("");

  
  const [categoria, setCategoria] = useState("Todas");


  const [soloDisponibles, setSoloDisponibles] = useState(false);

  
  const [ordenarPorPrecio, setOrdenarPorPrecio] = useState(false);

 
  const productosFiltrados = productos.filter(producto => {
    const coincideNombre = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    const coincideStock = !soloDisponibles || producto.stock > 0;

    return coincideNombre && coincideCategoria && coincideStock;
  });

  
  const productosOrdenados = ordenarPorPrecio
    ? [...productosFiltrados].sort((a, b) => a.precio - b.precio)
    : productosFiltrados;

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setSoloDisponibles(false);
  };

  return (
    <main className="contenedor">
      <h1>Tienda tecnológica</h1>
      <p>Productos disponibles: {disponibles.length}</p>
      <p>Valor del inventario: ${valorInventario}</p>

      {}
      <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(evento) => setBusqueda(evento.target.value)}
      />

    
      <select
  value={categoria}
  onChange={(evento) => setCategoria(evento.target.value)}
>
  <option value="Todas">Todas</option>
  <option value="Perifericos">Periféricos</option>
  <option value="Pantallas">Pantallas</option>
  <option value="Audio">Audio</option>
  <option value="Camaras">Cámaras</option>
  <option value="Almacenamiento">Almacenamiento</option>
  <option value="Componentes">Componentes</option>
  <option value="Computadores">Computadores</option>
</select>
      
      <label>
        <input
          type="checkbox"
          checked={soloDisponibles}
          onChange={(evento) => setSoloDisponibles(evento.target.checked)}
        />
        Mostrar únicamente disponibles
      </label>

      <button onClick={limpiarFiltros}>Limpiar filtros</button>

      
      <label>
        <input
          type="checkbox"
          checked={ordenarPorPrecio}
          onChange={(evento) => setOrdenarPorPrecio(evento.target.checked)}
        />
        Ordenar de menor a mayor precio
      </label>

      
      <p>Productos encontrados: {productosOrdenados.length}</p>

      <section className="productos">
        {productosOrdenados.map(producto => (
          <ProductoCard
            key={producto.id}
            producto={producto}
          />
        ))}
      </section>

      
      {productosOrdenados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : null}
    </main>
  );
}

export default App;
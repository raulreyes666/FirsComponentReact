
import React, { useState } from 'react'; // Importa React y el hook useState
import './App.css'; // I
import DishCard from './DishCard/DishCard'; // Importa el componente DishCard desde su ubicación relativa

function App() {
  const [showOutOfStock, setShowOutOfStock] = useState(true); // Define el estado showOutOfStock y la función para actualizarlo

  // Define una lista de platos con sus propiedades
  const dishes = [
    {
      image_src: 'disco.png',
      name: 'Other Planet Records',
      description: 'Check out for our new albums!',
      chin_ya_no_hay: true
    },
    {
      image_src: 'goteo.jpg',
      name: 'Goteo Duki',
      description: 'Mepuselaguxi conunshort denikestoy quegoteo',
      chin_ya_no_hay: false
    },
    {
      image_src: 'nadie.jpg',
      name: 'Nadie sabe lo que va pasar mañana',
      description: 'babunybeibe',
      chin_ya_no_hay: true
    }
  ];

  // Función para alternar la visibilidad de productos sin stock
  const toggleOutOfStock = () => {
    setShowOutOfStock(!showOutOfStock);
  };

  return (
    <div className="App"> {/* Contenedor principal de la aplicación */}
      <h1>Mi primer componente</h1> {/* Título principal */}
      {/* Input checkbox para alternar la visibilidad de productos sin stock */}
      <input type="checkbox" checked={showOutOfStock} onChange={toggleOutOfStock} /> Mostrar productos sin stock
      {/* Mapea la lista de platos y renderiza el componente DishCard para cada uno */}
      {dishes.map((dish, index) => {
        // Si la opción de mostrar productos sin stock está desactivada y el producto está sin stock, no lo muestra
        if (!showOutOfStock && dish.chin_ya_no_hay) {
          return null;
        }
        // Renderiza el componente DishCard con las propiedades del plato actual
        return (
          <DishCard
            key={index}
            image_src={dish.image_src}
            name={dish.name}
            description={dish.description}
            chin_ya_no_hay={dish.chin_ya_no_hay}
          />
        );
      })}
    </div>
  );
}

export default App; // Exporta el componente App como el componente principal de la aplicación

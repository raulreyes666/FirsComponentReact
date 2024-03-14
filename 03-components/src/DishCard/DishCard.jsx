
import React from 'react';
// Importamos el archivo CSS asociado a este componente para aplicar estilos
import './DishCard.css';
import { pad2d } from '@tensorflow/tfjs';

// Definimos el componente DishCard como una función de React
function DishCard({ image_src, name, description, chin_ya_no_hay }) {
  // La función DishCard toma propiedades como argumentos: `image_src`, `name`, `description`, y `chin_ya_no_hay`
  return (
    // Retornamos un div que representa la tarjeta del plato con la clase 'dish-card'
    <div className="dish-card">
    
      <h2>Album</h2>
      {/* Mostramos una imagen con la URL dada en `image_src` y el nombre del plato en el atributo alt */}
      <img src={image_src} alt={name} id='imgs' />
      {/* Mostramos el nombre del plato */}
      <h3>{name}</h3>
      {/* Mostramos la descripción del plato */}
      <p id='pd1'>{description}</p>
      {/* Si `chin_ya_no_hay` es verdadero, mostramos "Sin stock", de lo contrario no mostramos nada */}
      {chin_ya_no_hay ? <p>Sin stock</p> : null}
    </div>
  );
}

// Exportamos el componente DishCard para que pueda ser utilizado en otras partes de la aplicación
export default DishCard;

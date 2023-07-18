import React from 'react'
import './ItemListComponent.css'
import imagen from '../assets/imagen.png';

const ItemListComponent = (props) => {
  return (
    <div style={{ backgroundColor: props.back, display: "flex", justifyContent: "center", paddingTop: "60px" }}>
      <img className='imagenInicio' src={imagen} alt='imagen de inico' />
      <h2 className='textoInicio'>{props.greeting}</h2>
    </div>
  )
}

export default ItemListComponent

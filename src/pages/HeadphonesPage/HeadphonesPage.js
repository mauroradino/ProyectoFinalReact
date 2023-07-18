import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './HeadphonesPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ProductContext } from '../../context/productContext';

const HeadphonesPage = () => {
  const { Headphones, setSelectedProduct } = useContext(ProductContext);
  console.log(Headphones)
  const handleButtonClick = (HP) => {
    setSelectedProduct(HP);
  };

  return (
    <div style={{ backgroundColor: '#e0e0e0' }}>
      <h1>Headphones</h1>
      <div className='grid_productos'>
        {Headphones.map((HP) => (
          <div className={`card cardProductos card${HP.id}`} key={HP.id}>
            <img src={HP.imagenURL} className="card-img-top" alt="Imagen Producto" />
            <div className="card-body">
              <h5 className="card-title">{HP.nombre}</h5>
              <p className="card-text">Cost: ${HP.precio}</p>
              <Link
                className='Link'
                onClick={() => handleButtonClick(HP)}
                to={`/Item/${HP.id}`}
              >
                More Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadphonesPage;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './InearsPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ProductContext } from '../../context/productContext';

const InearsPage = () => {
  const { Inears, setSelectedProduct } = useContext(ProductContext);

  const handleButtonClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div style={{ backgroundColor: '#e0e0e0' }}>
      <h1>In-Ears</h1>
      <div className='grid_productos'>
        {Inears.map((product) => (
          <div className={`card cardProductos card${product.id}`} key={product.id}>
            <img src={product.imagenURL} className="card-img-top" alt="Imagen Producto" />
            <div className="card-body">
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text">Cost: ${product.precio}</p>
              <Link
                className='Link'
                onClick={() => handleButtonClick(product)}
                to={`/Item/${product.id}`}
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

export default InearsPage;
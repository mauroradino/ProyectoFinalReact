import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import './DetailsPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ProductContext } from '../../context/productContext';
import Swal from 'sweetalert2'

const DetailsPage = () => {
  let seleccionado;
  const { id } = useParams();
  const { Inears } = useContext(ProductContext);
  const { Headphones } = useContext(ProductContext);
  const { carrito, setCarrito } = useContext(ProductContext);

  const selectedProduct = Inears.find((product) => product.id === id);
 
  if (selectedProduct === undefined) {
    const selectedProduct2 = Headphones.find((product) => product.id === id);
    seleccionado = selectedProduct2;
  } else {
    seleccionado = selectedProduct;
  }

  const handleAddToCart = () => {
    setCarrito([...carrito, seleccionado]);
    console.log(carrito);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'added product',
      showConfirmButton: false,
      timer: 1500
    })
  };

  return (
    <div style={{ backgroundColor: '#e0e0e0' }}>
      {seleccionado ? (
        <>
          <h1>Details</h1>
          <div className='detailCard'>
            <div className={`cardDetail`}>
              <div id='carouselExampleIndicators' className='carousel slide'>
              <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={seleccionado?.imagenURL} className="d-block imagenCarrousel" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={seleccionado?.imagenURL2} className="d-block imagenCarrousel" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={seleccionado?.imagenURL3} className="d-block imagenCarrousel" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{seleccionado?.nombre}</h5>
                <p className='card-text'>{seleccionado?.descripcion}</p>
                <p className='precio'>Cost: $ {seleccionado?.precio}</p>
                <Link className='Link' onClick={handleAddToCart}>
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default DetailsPage;

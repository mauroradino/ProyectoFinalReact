import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import ItemListComponent from '../../components/ItemListComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ProductContext } from '../../context/productContext';
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css'


function HomePage() {
  const { Headphones, Inears } = useContext(ProductContext);

  console.log("HP ", Headphones);
  const productosDestacados = [Headphones[1], Inears[2], Headphones[3], Inears[4], Headphones[5], Inears[6], Headphones[7], Inears[8]];
  console.log(productosDestacados);

  const productosDestacadosGrupos = [];
  for (let i = 0; i < productosDestacados.length; i += 4) {
    const grupo = productosDestacados.slice(i, i + 4);
    productosDestacadosGrupos.push(grupo);
  }

  return (
    <div style={{ backgroundColor: "#e0e0e0" }}>
      <div className='bodyHome'>
        <ItemListComponent greeting="BIENVENIDOS" />
        <h2 className='tituloDestacados'>Productos Destacados</h2>
        <Carousel>
          {productosDestacadosGrupos.map((grupo, index) => (

            <Carousel.Item key={index}>
              <div className="d-flex justify-content-evenly">
                {grupo.map((destacado) => (
                  <Link to={`/Item/${destacado?.id}`}>
                    <div className="cardHome card" key={destacado?.id}>
                      <div className="card-body">
                        <h5 style={{ textDecoration: "none" }} className="card-title card-title-home">{destacado?.nombre}</h5>
                        <img width="200px" src={destacado?.imagenURL} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default HomePage;

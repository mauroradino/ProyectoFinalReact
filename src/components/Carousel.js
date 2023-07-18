import React from 'react'
import { useParams} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Productos from '../productos.json'

const Carousel = () => {
    let { id } = useParams();
  return (
         <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={producto[id].imagenURL} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={"https://images.prom.ua/3431591509_w640_h640_besprovodnye-naushniki-marshall.jpg"} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={"https://fotografias.antena3.com/clipping/cmsimages02/2022/12/23/61C0B7E6-300F-407A-AE9A-FD8548D6FF07/messi-copa-mundo_98.jpg?crop=3142,1768,x0,y0&width=1900&height=1069&optimize=low&format=webply"} className="d-block w-100" alt="..." />
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
  )
}

export default Carousel

import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const Footer = () => {
  return (
    <div class="footer container">
      <hr></hr>
    <footer>
      <ul class="nav justify-content-center border-bottom">
        <li class="nav-item"><p class="nav-link px-2 text-body-secondary">Home</p></li>
        <li class="nav-item"><p class="nav-link px-2 text-body-secondary">Clients</p></li>
        <li class="nav-item"><p class="nav-link px-2 text-body-secondary">About Us</p></li>
        <li class="nav-item"><p class="nav-link px-2 text-body-secondary">Products</p></li>
        <li class="nav-item"><p class="nav-link px-2 text-body-secondary">FAQs</p></li>
      </ul>
      <p class="text-center text-body-secondary">© 2023 E-HEADPHONES, Inc</p>
    </footer>
  </div>
  )
}

export default Footer

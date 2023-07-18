import React from 'react' 
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './CategoryPage.css'
function CategoryPage() {
  return (
    <div className='box'>
      <div className="row">
  <div className="col-sm-6">
  <Link to="/category/Headphones" className="cardCategory">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Headphones Section</h5>
        <img alt='Category Image' src='https://static-www.o2.co.uk/sites/default/files/space-grey-apple-airpods-max-sku-header-091220.png' width={"40%"} />
      </div>
    </div></Link>
  </div>
  <div className="col-sm-6">
  <Link to="/category/Inears" className="cardCategory">
    <div className="card">
      <div className="card-body">
        <h5>In-Ears Section</h5>
        <img alt='Category Image' src='https://www.sunrise.ch/var/commerce/products/web/Default/en/apple_airpods_pro2generationparent/picture.1670451659265.transform/original/23175-apple-airpods-pro-2-generationpng.png' width={"40%"} />
      </div>
    </div></Link>
  </div>
</div>
    </div>
  )
}

export default CategoryPage

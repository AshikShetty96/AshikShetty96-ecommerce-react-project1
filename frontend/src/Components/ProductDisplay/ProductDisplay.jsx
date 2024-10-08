import React, { useContext } from 'react';
import './ProductDisplay.css'

import { ShopContext } from '../../Context/ShopContext';



const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">

            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>

            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                <div className="productdisplay-right-price-new">₹{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight,usually knitted,pullover shirt,close-fitting hwdhwyduhbd
                wefdhbwiufuwu ewhwhed wehdbwiu wehbfdw wiefyg wefwy fuwhefuh wefdhbwiufuwuwe
                wejfef.
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
        </div>
    </div>

  )
}

export default ProductDisplay
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" srcset="" />
            </div>
            <div className="product-detail">
                <h4 >{name}</h4>
                <br />
                <p> <small>By {seller}</small> </p>
                <br />
                <p>${price}</p>
                <p><small> Only {stock} left in stock</small></p>
                <button 
                    className='add-to-cart-btn'
                    onClick={() => props.handleAddProduct(props.product)}
                    >

                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>

        </div>
    );
};

export default Product;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css';
import { faCoffee,faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    
   const {name,img,seller,price,ratings}=props.product;
   const{handleAddToCart}=props;
//    er mane hocce props er modde handleAddToCart name ekta kicu ase
    return (
        <div className='product' >
            <img src={img} alt="" />
            <div className='product-info' >
            <p className='product-name' >{name}</p>
            <p>Price : ${price}</p>
            <p><small>Seller :{seller}</small></p>
            <p><small>Ratting:{ratings} Stars</small></p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='button-cart' ><p className='button-text' >Add To Cart</p><FontAwesomeIcon icon={faCartShopping} ></FontAwesomeIcon></button>
            

        </div>
    );
};

export default Product;
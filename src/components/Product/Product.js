import React from 'react';
import './Products.css'

const Product = (props) => {
   const {name,img,seller,price,ratings}=props.product;
    return (
        <div className='product' >
            <img src={img} alt="" />
            <div className='product-info' >
            <p className='product-name' >{name}</p>
            <p>Price : ${price}</p>
            <p><small>Seller :{seller}</small></p>
            <p><small>Ratting:{ratings} Stars</small></p>
            </div>
            <button className='button-cart' >Add TO Cart</button>

        </div>
    );
};

export default Product;
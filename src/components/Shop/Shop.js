import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch ('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));

    },[]);

    const[cart,setCart]=useState([]);

    const handleAddToCart=(product)=>{
        // console.log(product);
        // cart.push(product);
        const newCart =[...cart,product];
        setCart(newCart);
    }
    return (
        
        <div className='shop-container' >
            <div className="products-container">
                {
                    products.map(product=> <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>
                    selected Items:{cart.length};
                </p>
                <br /> <br />
                <button>Jahid</button>
                <h6>Daffodil internation univarsity</h6>
            </div>


            
        </div>
    );
};

export default Shop;
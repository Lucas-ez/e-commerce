import React, { useRef } from 'react'
import './header.css'

import Buscador from './../components/Buscador';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

export default function Header({input, handleChange, cart, removeProductToCart}) {
  
  const cartRef = useRef();

  const showCart = () => {
    cartRef.current.classList.toggle('expanded-cart')
  }
  
  return (
    <div className='Header'>
      <div className='container'>
        <div className='logo'>
          logo
        </div>
        <div className='desk-buscador'>
          <Buscador input={input} handleChange={handleChange}/>
        </div>
        <button className='cart-btn' onClick={showCart}>
          <FaShoppingCart className='cart-icon'/>
          <div className='cart-icon_sub'>{cart.length ? cart.length:undefined}</div>
        </button>
        <div ref={cartRef} className='cart-menu'>
          <button className='cart-btn close-btn' onClick={showCart}>
            <FaTimes/>
          </button>
          <div className='cart-productos'>
            <div className='cart-productos_list'>
              {cart.map((product) => 
                <div key={product.id}>
                  <h2 className='cart-producto-item'>
                    <button className='removeProduct-btn' onClick={() => removeProductToCart(product.id)}>X</button>{' $ ' + product.price + ' - ' + product.title}
                  </h2>
                </div>)
              }
            </div>
            <h1>Total $ {cart.reduce((prev, current) => { return {'price' : prev.price + current.price}}, {'price':0}).price}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

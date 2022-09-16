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
        <Buscador input={input} handleChange={handleChange}/>
        <button className='cart-btn' onClick={showCart}>
          <FaShoppingCart className='cart-icon'/>
        </button>
        <div ref={cartRef} className='cart-menu'>
          <button className='cart-btn close-btn' onClick={showCart}>
            <FaTimes/>
          </button>
          <div className='cart-productos'>
            {cart.map((product) => 
              <div key={product.id}>
                <h2><button onClick={() => removeProductToCart(product.id)}>X</button>{' $ ' + product.price + ' - ' + product.title}</h2>
              </div>)
            }
            <h1>Total $ {cart.reduce((prev, current) => { return {'price' : prev.price + current.price}}, {'price':0}).price}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

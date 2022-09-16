import React, { useRef } from 'react'
import './header.css'

import Buscador from './../components/Buscador';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';

export default function Header({input, handleChange}) {
  
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
            productos
          </div>
        </div>
      </div>
    </div>
  )
}

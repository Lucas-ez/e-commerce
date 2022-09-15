import React from 'react'
import './header.css'

import Buscador from './../components/Buscador';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header({input, handleChange}) {
  return (
    <div className='Header'>
      <div className='container'>
        <div className='logo'>
          logo
        </div>
        <Buscador input={input} handleChange={handleChange}/>
        <FaShoppingCart className='cart-icon'/>
      </div>
    </div>
  )
}

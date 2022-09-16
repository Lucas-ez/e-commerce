import React from 'react'
import './producto.css'
import { FaCartPlus } from 'react-icons/fa';

export default function Producto( { title, image, price, addProductToCart } ) {
  return (
    <div className='Producto'>
      <img className='Producto_image' src={image} alt="" />
      <h6 className='Producto_title'>{title}</h6>
      <div className='Producto_bot'>
        <h2 className='Producto_price'>{"$ " + price}</h2>
        <FaCartPlus className='cart_add-icon' onClick={() => addProductToCart(title, price)}/>
      </div>
    </div>
  )
}

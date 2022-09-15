import React from 'react'
import './buscador.css'

export default function Buscador({input, handleChange}) {
  return (
    <div className='Buscador'>
      <input 
        type="text"
        className='buscador' 
        value={input} 
        onChange={handleChange} 
        />
    </div>
  )
}

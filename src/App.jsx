import { useEffect, useState } from 'react';
import Producto from './components/Producto';
import './App.css';


function App() {
  const [apiData, setApiData] = useState([])
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [input, setInput] = useState("")

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.escuelajs.co/api/v1/products?offset=5&limit=48`)
            .then(res => res.json())
            .then(data => {
              console.log(data)
              setApiData(data)
              setProductos(data)
              setLoading(false)
            })
  }, [])

  const handleChange = (e) => {
    const newInput = e.target.value
    setInput(newInput);
    setProductos(apiData.filter((e) => e.title.toLowerCase().includes(newInput.toLowerCase())))
  }

  return (
    <div className="App">
      <input 
        type="text"
        className='buscador' 
        value={input} 
        onChange={handleChange} 
      />
      <div className='lista-productos'>
        {loading ?
        <h2>Loading...</h2>
        :
        productos.map( ( producto ) => 
          <Producto 
            key={producto.id}
            image={producto.images[0]}
            price={producto.price}
            title={producto.title}/>
        )}
      </div>
    </div>
  );
}

export default App;

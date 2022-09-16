import { useEffect, useState } from 'react';
import Producto from './components/Producto';
import Header from './containers/Header';
import './App.css';


function App() {
  const [apiData, setApiData] = useState([])
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [input, setInput] = useState("")
  const [cart, setCart] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(`https://api.escuelajs.co/api/v1/products?offset=5&limit=48`)
            .then(res => res.json())
            .then(data => {
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

  const addProductToCart = (title, price) => {
    let id = cart.length
    setCart([...cart, {
      'id': id,
      'title': title,
      'price': price,
    }])
  }

  const removeProductToCart = (id) => {
    setCart(cart.filter(p => p.id !== id))
  }

  return (
    <div className="App">
      <Header input={input} handleChange={handleChange} cart={cart} removeProductToCart={removeProductToCart}/>
      <div className='lista-productos'>
        {loading ?
        <h2>Loading...</h2>
        :
        productos.map( producto => 
          <Producto 
          key={producto.id}
          image={producto.images[0]}
          price={producto.price}
          title={producto.title}
          addProductToCart={addProductToCart}
          />
        )}
      </div>
    </div>
  );
}

export default App;

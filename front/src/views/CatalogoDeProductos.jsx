import React,{useState, useEffect}  from 'react'
import Card from '../components/card'
import Header from '../components/header'
import '../styles/header.css'
import '../styles/card.css'

const CatalogoDeProductos = () => {
    const [products, setProducts] = useState([]);
    
 // Obteniendo los productos desde la api
    useEffect(() => {
        const getProductsApi = async () => {
            await fetch(`http://localhost:5000/api/products`)
                .then((res) => res.json(res))
                .then((res) => {
                    setProducts(res)
                    localStorage.setItem('products', JSON.stringify(res))
                })
        }
        getProductsApi()
    }, [])


    const onSearch = (text) => {
        const localProducts = JSON.parse(localStorage.getItem('products'));
        const filterProducts = localProducts.filter(product => product.name.toLowerCase().startsWith(text.toLowerCase()));
        setProducts(filterProducts);
    }

  return (
    <div>
        <Header onSearch={onSearch} />
        <main className='menu-card-container'>
            <section className='card-title'>
                <h2>Productos</h2>
            </section>

            <section className='card-container'>
                { 
                    products.map(item => <Card data={item} key={item.id}></Card>)
                }
            </section>

        </main>
    </div>
  )
}

export default CatalogoDeProductos

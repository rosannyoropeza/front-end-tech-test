import React from 'react'
import TableProducts from '../components/tableProducts'
import Header from '../components/header'
import '../styles/header.css'
import '../styles/tableProducts.css'

const CarritoDeCompras = () => {
  return (
    <div>
        <Header />
        <main className='menu-table-container'>
            <section className='table-title'>
                <h2> Resumen de Productos </h2>
            </section>
            <section className='table-title-container'>
              <TableProducts/>
            </section>
        </main>
    </div>
  )
}

export default CarritoDeCompras;

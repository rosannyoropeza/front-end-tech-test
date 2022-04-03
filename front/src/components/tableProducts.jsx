import React from 'react'
import { connect } from 'react-redux'

const TableProducts = (props) => {
  return (
    <section className='table-products-container'>
      <table className='table-products'>
          <thead>
              <tr> 
                  <th> Producto </th>
                  <th> Precio </th>
                  <th> Total </th>
                  <th> Acciones </th>
              </tr>
          </thead>
          <tbody>

            { 
                props.arrProducts.map(item => 
                <tr>
                    <td>
                      <div className='products-container'>
                        <img className='table-products-img' src={`http://localhost:5000${item.image}`} alt='imagen del producto'/>
                        <span>{ item.name }</span>
                      </div>
                    </td> 
                    <td> 
                        {` $ ${ item.price }`}
                    </td>
                    <td> {` $ ${ item.price * item.cant }`} </td>
                    <td> 
                      <div className='button-container'>
                        <button className='button-accion'>
                          <span className='btn-accion'> + </span>
                        </button>
                        <span> {item.cant} </span>
                        <button className='button-accion'>
                          <span className='btn-accion'> - </span>
                        </button>
                        <button className='button-accion'>
                          <span className='btn-accion'> x </span>
                        </button>
                      </div>
                    </td>
                </tr>
              )
            }
             
          </tbody>
      </table>
    </section>
  )
}


const mapStateToProps = (state) => {
  return {
    arrProducts: state.stateArrCartProducts
  }
}

export default connect(
  mapStateToProps
) (TableProducts)
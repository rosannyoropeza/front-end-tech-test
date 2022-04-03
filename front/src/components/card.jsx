import React from 'react'
import { connect } from 'react-redux'
import {addCart} from '../actions/cartActions'

const Card = (props) => {
  // const [disable, setDisable] = React.useState(props.data.countInStock === 0 ? true : false);

  const handleAddCart = () => {
    props.data.cant = 1;
    props.addCartAction(props.data)
  }

  return (
    <article className='card-products'>
        <img className='card-products-img' src={`http://localhost:5000${props.data.image}`} alt='imagen del producto'/>
        <h3 className='card-products-title'>{props.data.name}</h3>
        <p className='card-products-price'>
        {` $ ${ props.data.price }`}
        </p>

        
        
        <button className='card-btn' onClick={handleAddCart} disabled= { props.data.countInStock === 0 } >
          Add item to cart
        </button>
    </article>
  )
}

const mapStateToProps = (state) => {
  return { state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCartAction : (product) => {
      dispatch(addCart(product))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Card)
import React, {useState} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import cart from '../assets/icons/cart-shopping-solid.svg'
import searchIcon from '../assets/icons/magnifying-glass-solid.svg'

const Header = (props) => {
    const [search, setSearch] = useState('');

    const handleInputChange = (e) => {
        setSearch([e.target.search] = e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSearch(search)
    }

  return (
    <header>
        <nav className='nav-header-container'>
            <div className='flex-header'>
                <section className='logo-container'>
                    <Link to="/" exact>
                        <p className='logo'>Ecommerce</p>
                    </Link>
                </section>

                <section className='cart-container'>
                    <Link to='/carrito' exact>
                        <img src={cart} className='icon' alt='carrito de compras'/>
                        <span> Carrito ({ props.arrProducts.length }) </span>
                    </Link>
                </section>
            </div>

            <section className='form-search-container'>
                <form className='form-search' action='' onSubmit={onSubmit}>
                    <input 
                        className='search-form' 
                        type='search' 
                        placeholder='Buscar productos' 
                        name='searh' 
                        onChange={handleInputChange}
                        autoComplete='off'
                    />
                    <button className='btn-form' type='submit'>
                        <img src={searchIcon} className='searchIcon' alt='boton buscar' />
                    </button>
                </form>
            </section>
        </nav>
    </header>
  )
}

// Funcion para mapear los estados a los props
const mapStateToProps = (state) => {
    return {
      arrProducts: state.stateArrCartProducts
    }
}
  
export default connect(
    mapStateToProps
) (Header)
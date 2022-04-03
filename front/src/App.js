import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import CarritoDeCompras from './views/CarritoDeCompras';
import CatalogoDeProductos from'./views/CatalogoDeProductos';

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState('')

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])
  // -------------------------------------------------

  return (
    <>
      <Router>
        <div className="router-container">
          <Switch>
            <Route path="/" exact>
              <CatalogoDeProductos data={response} />
            </Route>
          </Switch>
          <Switch>
            <Route path="/carrito" exact>
              <CarritoDeCompras/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App

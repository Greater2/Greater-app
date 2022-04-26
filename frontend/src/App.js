import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomeScreen from "./Screen/HomeScreen";
import ProductScreen from "./Screen/ProductScreen";

function App() {
  return (
   <Router>
      <div className='grid-container'>
        <header className='row'>
          <div>
            <a className='brand' href='/'>
              Greater-shop
            </a>
          </div>
          <div>
            <a href='/cart'>Cart</a>
            <a href='/signin'>Sign In</a>
          </div>
        </header>
        <main>
          <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/product/:id" element={<ProductScreen/>} />


          </Routes>
          
        </main>
        <footer className='row center'>All right reserved</footer>
      </div>
      </Router>
  );
}

export default App;

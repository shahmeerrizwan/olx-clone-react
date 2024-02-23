import React from 'react'
import Product from './Pages/Product';
import Delivery from './Pages/Delivery';
import Reviews from './Pages/Reviews';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div >

      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

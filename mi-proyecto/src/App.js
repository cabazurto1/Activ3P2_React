import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import SmartphoneImage from './assets/smartphone.png';
import TelevisionImage from './assets/television.png';
import ConsoleImage from './assets/console.png';
import PCImage from './assets/pc.png';

function App() {
  const initialProducts = [
    {
      id: 1,
      image: SmartphoneImage,
      name: 'Smartphone',
      price: '699.99',
      description: 'Descripción detallada del Smartphone...'
    },
    {
      id: 2,
      image: TelevisionImage,
      name: 'Televisión',
      price: '499.99',
      description: 'Descripción detallada de la Televisión...'
    },
    {
      id: 3,
      image: ConsoleImage,
      name: 'Consola de Videojuegos',
      price: '399.99',
      description: 'Descripción detallada de la Consola de Videojuegos...'
    },
    {
      id: 4,
      image: PCImage,
      name: 'PC de Escritorio',
      price: '799.99',
      description: 'Descripción detallada del PC de Escritorio...'
    }
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          {initialProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </main>
        <Routes>
          <Route exact path="/" element={<div></div>} />
          <Route path="/product/:id" element={<ProductDetail products={initialProducts} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

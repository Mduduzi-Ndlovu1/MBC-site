import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import ProductDetail from './components/ProductDetail'; // Import the ProductDetail component
import Footer from './components/Footer';
import './App.css';
import Contact from "./pages/Contact";

function App() {
  return (
  <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:categoryId/:subCategoryId" element={<ProductDetail />} /> {/* Add route for ProductDetail */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

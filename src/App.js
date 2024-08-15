import './App.css';
import { useRef ,useState , useEffect } from 'react';
import Home from './Home';
// import { Routes, Route } from "react-router-dom";
import Shop from './Shop';
import Aboutus from './Aboutus';
import Blog from './Blog';
import Demo from './Demo';
import Cross from './components/Cross';
import Beg from './components/Beg';
import Mid from './components/Mid';
import ShopComp from './components/ShopComp';
import {
  Routes,
  Route,
} from "react-router-dom";
import PaymentPage from './Payment';

function App() {
  
  return (
    <>
      


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/crossroad" element={<Cross />} />
        <Route path="/begning" element={<Beg />} />
        <Route path="/card/:title" element={<ShopComp />} />
        <Route path="/view" element={<ShopComp />} />
        <Route path="/middle" element={<Mid />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </>
  );
}

export default App;

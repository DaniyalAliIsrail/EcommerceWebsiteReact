import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Pagenotfound from './Pages/PageNotFound/Pagenotfound';
import Products from './Pages/Products/Products';
import { Route, Routes } from "react-router-dom";
import MyFooter from './components/MyFooter';
import SingleProducts from './Pages/SingleProducts.jsx/SingleProducts';
import Newsletter from './components/Newsletter';
import { NavbarSimple } from './components/Mynav';
function App() {
  return (
    <>
      <NavbarSimple  />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/singleproducts/:productsid' element={<SingleProducts />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
      <div>
        <Newsletter />
      </div>
      <div className='mt-2 mx-auto'>
      <MyFooter />
      </div>
    </>
  )
}

export default App

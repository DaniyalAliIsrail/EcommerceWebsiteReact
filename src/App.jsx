import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Pagenotfound from './Pages/PageNotFound/Pagenotfound';
import Products from './Pages/Products/Products';
import MyNavbar from './Components/MyNavbar';
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
    </>
  )
}

export default App

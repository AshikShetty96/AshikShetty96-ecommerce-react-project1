
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Product from './Pages/Product';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

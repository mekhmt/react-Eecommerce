
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Shop from './Components/Pages/Shop';
import ShopCatagory from './Components/Pages/ShopCatagory';
import { Cart } from './Components/Pages/Cart';
import { LoginSignup } from './Components/Pages/LoginSignup';
import Product from './Components/Pages/Product';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCatagory catagory="men"/>}/>
            <Route path='/womens' element={<ShopCatagory catagory="women"/>}/>
            <Route path='/kids' element={<ShopCatagory catagory="kid"/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
            <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;

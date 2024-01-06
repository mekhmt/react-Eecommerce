
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom'; 
import Shop from './Components/Pages/Shop';
import ShopCatagory from './Components/Pages/ShopCatagory';
import { Cart } from './Components/Pages/Cart';
import { LoginSignup } from './Components/Pages/LoginSignup';
import Product from './Components/Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div>
      <HashRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/mens' element={<ShopCatagory  banner = {men_banner} category="men"/>}/>
            <Route path='/womens' element={<ShopCatagory banner = {women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShopCatagory banner = {kids_banner} category="kid"/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<LoginSignup/>}/>
            <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}/>
            </Route>
        </Routes>
        <Footer/>
      </HashRouter>
      
      
    </div>
  );
}

export default App;

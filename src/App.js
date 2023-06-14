import "./style/style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import MainItems from "./components/MainItems/MainItems";
import SingleProduct from "./components/SinglePorduct/SingleProduct";
import Category from "./components/category/Category";
import Admin from "./components/Admin/Admin";
import Carrito from "./components/Carrito/Carrito";
import Products from "./components/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <header className="Header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<MainItems />} />
        <Route path="/carrito" element={<Carrito/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/item/:productId" element={<SingleProduct/>}/>
        <Route path="/category/:categoryId" element={<Category/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./style/style.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import MainItems from "./components/MainItems/MainItems";
import SingleProduct from "./components/SinglePorduct/SingleProduct";
import Category from "./components/category/Category";

function App() {
  return (
    <BrowserRouter>
      <header className="Header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<MainItems />} />
        <Route path="/products" element={<MainItems />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item/:productId" element={<SingleProduct/>}/>
        <Route path="/category/:categoryId" element={<Category/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

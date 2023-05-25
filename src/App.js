import "./style/style.css";

import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import MainItems from "./components/MainItems/MainItems";
import Footer from "./components/Footer/Footer";
import SingleProduct from "./components/SinglePorduct/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <header className="Header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<MainItems />} />
        <Route path="/products" element={<Products />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item/:id" element={<SingleProduct/>}/>
      </Routes>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;

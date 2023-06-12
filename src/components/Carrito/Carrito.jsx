import { useSelector } from "react-redux";
import "./Carrito.css";

const Carrito = () => {

    const carrito = useSelector((state) => state.cart);

    
    
  return (
    <div className='carritoDiv'>
      
    </div>
  );
};

export default Carrito;

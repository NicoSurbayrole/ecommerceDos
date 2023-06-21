import './Carrito.css'
import { useSelector } from "react-redux";
import {Cuenta} from './hook/Cuenta'
const Carrito = () => {
  const carrito = useSelector((state) => state.cart);

  const {numeroInicial,suma,resta,reset} = Cuenta()


  return (
    <div className="carritoDiv">
      {carrito.length === 0 ? (
        <h2>NO HAY ARTICULOS EN EL CARRITO</h2>
      ) : (
        carrito.map(({ articulo, imgUrl, id, stock, price, description}) => (
          <section className="cartSection" key={id}>
            <img className="carritoImg" alt={articulo} src={imgUrl} />
            <div className="cartDivContainer">
              <h2 className="cartH2">{articulo.toUpperCase()}</h2>
              <p className="cartP">{description.toUpperCase()}</p>
              <p className="cartP">PRECIO: {price}$</p>
            </div>
            <div className="cartDivContainer">
              <button onClick={()=>{suma(stock)}} className="cartBtn">
                AGREGAR
              </button>
              <button onClick={resta} className="cartBtnResta">
                RESTAR
              </button>
            </div>
            <div>
              <h2 className="cartCantidad">CANTIDAD:</h2>
              <p className="cartCantidadP">{numeroInicial}</p>
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export default Carrito;

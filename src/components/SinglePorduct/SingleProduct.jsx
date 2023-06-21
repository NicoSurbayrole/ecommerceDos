import "./SingleProduct.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { GetProducts } from "../../utils/GetProducts";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "../../state/carrito";

let cart = [];


const SingleProduct = () => {
  const arrTalles = ["XS", "S", "M", "L"];
  const dispatch = useDispatch()
  
  const { productId } = useParams();
  const [params, setParams] = useState(productId);
  const { productos } = GetProducts();
  

  useEffect(() => {
    setParams(productId);
  }, [productId]);

  const singleProduct = productos.filter(
    (product) => product.productId === params
  );



  const handelCarrito = () => {
    let findProduct = cart.find((product) => product.id === singleProduct[0].id);
    if (!findProduct) {
      cart.push(singleProduct[0]);
      Swal.fire({
        icon: 'success',
        title: 'El Producto Fue Agregado',
        text: 'Gracias Por su Compra!',
      })
      dispatch(setCart([...cart]))
    } else {
      Swal.fire({
        icon: 'error',
        title: 'El Producto Ya fue Agregado',
        text: 'Agrega mas cantidad desde el carrito!',
      })
    }
  };

  return (
    <main className="mainSingleProduct">
      {singleProduct.map(({ articulo, description, imgUrl, price }) => {
        return (
          <>
            <img className="productImg" alt={articulo} src={imgUrl}></img>
            <div className="product">
              <h2>{articulo.toUpperCase()}</h2>
              <p className="Small">{description}</p>
              <p className="Precio">{price}$</p>
              {arrTalles.map((talles) => (
                <p className="talles">{talles}</p>
              ))}
              <div>
                <button
                  onClick={() => handelCarrito()}
                  className="btnCarrito"
                >
                  AGREGR AL CARRITO
                </button>
              </div>
            </div>
          </>
        );
      })}
    </main>
  );
};

export default SingleProduct;


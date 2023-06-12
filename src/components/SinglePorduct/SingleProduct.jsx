import "./SingleProduct.css";
import { GetProducts } from "../../utils/GetProducts";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SingleProduct = () => {
  const arrTalles = ["XS", "S", "M", "L"];
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
                <button onClick={handelCarrito} className="btnCarrito">
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

// const SinglePorduct = productos.find(()=>(product) => product.productId === params)

// return (
//     <main className='mainSingleProduct'>
//         <img className="productImg" src={SinglePorduct.imgUrl} alt={SinglePorduct.articulo}></img>
//         <div className='containerProduct'>
//             <h2>{SinglePorduct.articulo.toUpperCase()}</h2>
//         </div>
//     </main>
// )

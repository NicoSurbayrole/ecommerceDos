import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProducts } from "../../utils/GetProducts";
import "./category.css";

const Category = () => {
  const { categoryId } = useParams();
  const [params, setParams] = useState(categoryId);

  const { productos } = GetProducts();

  useEffect(() => {
    setParams(categoryId);
  }, [categoryId]);

  const singleProduct = productos.filter(
    (product) => product.categoryId === params
  );

  return (
    <main className="container">
      {singleProduct.map(
        ({ productId, articulo, description, imgUrl, price }) => {
          return (
            <div key={productId} className="Div">
              <img className="Img" alt={articulo} src={imgUrl}></img>
              <h2 className="articulo">{articulo.toUpperCase()}</h2>
              <p className="description">{description.toUpperCase()}</p>
              <p>price: {price}$</p>
              <button className="BTN">AGREGAR AL CARRITO</button>
            </div>
          );
        }
      )}
    </main>
  );
};

export default Category;

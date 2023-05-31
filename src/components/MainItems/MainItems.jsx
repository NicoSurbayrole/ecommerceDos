import { GetProducts } from "./hook/GetProducts"
import ItemList from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";

const MainItems = () =>{
    const {productos} = GetProducts()
    
    return productos.length > 0 ? (
        <ItemList listaProductos={productos} />
      ) : (
        <>
          <h1>Cargando...</h1>
          <Spinner animation="grow" />
        </>
      );
}


export default MainItems
import { useEffect, useState } from "react";
import{getCollection} from './getFirestore'

export const GetProducts = () =>{
  const [productos, setProductos] = useState([]);
    
      useEffect(() => {
        getCollection("productos").then((result) => {
          setProductos(result);
        });
      }, [])

      return{productos}
} 
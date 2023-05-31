import { useEffect, useState } from "react";
import{getCollection} from '../../../utils/getFirestore'

export const GetProducts = () =>{
  const [productos, setProductos] = useState([]);
    
      useEffect(() => {
        getCollection("productos").then((result) => {
          setProductos(result);
        });
      },[])

      return{productos}
} 
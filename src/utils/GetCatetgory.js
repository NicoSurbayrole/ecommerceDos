import { useEffect, useState } from "react";
import{getCollection} from './getFirestore'

export const GetCategory = () =>{
    const [categoria, setCategoria] = useState([]);
    
    useEffect(() => {
        getCollection("categorias").then((result) => {
          setCategoria(result);
        });
      }, []);

      return{categoria}
} 
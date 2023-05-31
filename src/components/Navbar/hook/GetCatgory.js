import { useEffect, useState } from "react";
import{getCollection} from '../../../utils/getFirestore'

export const GetCategory = () =>{
    const [categoria, setCategoria] = useState([]);
    
    useEffect(() => {
        getCollection("categorias").then((result) => {
          setCategoria(result);
        });
      }, []);

      return{categoria}
} 
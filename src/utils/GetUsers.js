import { useEffect, useState } from "react";
import{getCollection} from './getFirestore'

export const GetUsers = () =>{
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        getCollection("usuarios").then((result) => {
          setUser(result);
        });
      }, []);

      return{user}
} 
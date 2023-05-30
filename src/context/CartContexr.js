import { createContext } from "react";


export const CartContext = createContext(null);

const AddProductCart = 0;


export const CartContextProvider = ({children}) => <CartContext.Provider value={AddProductCart}>{children}</CartContext.Provider>
    

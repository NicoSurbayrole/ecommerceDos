import { configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger"

import userReducer from "./user";
import cartReducer from "./carrito";


const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer:{
        user: userReducer,
        cart:cartReducer
    }
})

export default store
import { useState } from "react";

export const Cuenta = (cantidad = 1) => {
    
  const [numeroInicial, setNumeroInicial] = useState(cantidad);


    const suma = (stock) => {
      numeroInicial < Number(stock) ? setNumeroInicial(numeroInicial + 1) : alert("no hay stock suficiente")
    }
    const resta = () => numeroInicial !== 1 ? setNumeroInicial(numeroInicial - 1) : alert("El contador no puede bajar de 1")

    return{numeroInicial,suma,resta}
  };




import React from "react";
import { useState } from 'react';
import CartContext from './cartContext';

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addEquipment = (equipment) => {
    if(cart.find((e) => e.id === equipment.id)) return;
    setCart((prevState) => [...prevState, equipment]);
  };

  const removeEquipment = (equipment) => {
    setCart((prevState) => prevState.filter((e) => e.id !== equipment.id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addEquipment, removeEquipment }}
    >
      {children}
    </CartContext.Provider>
  );
}

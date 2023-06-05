import { createContext } from 'react';

const CartContext = createContext({
  cart: [],
  addEquipment: () => {},
  removeEquipment: () => {},
});

export default CartContext;

import React from "react";
import { useContext } from 'react';
import styles from "./cart.module.css";
import CartContext  from "../../context/cartContext"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


;

const Home = () => {
    const { cart, addEquipment, removeEquipment } = useContext(CartContext);

    const handleRemove = (equipment) => {
        removeEquipment(equipment);
    };
  return (
    <div className={styles.cartContainer}>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.itemContainer}>
          <h2>Cart:</h2>
          {cart.map((equipment) => (
            <div className={styles.cartItem} key={equipment.id}>
                <img src={equipment.imageURL} alt="" />
                <div>{equipment.name}</div>
              <Button color="error" startIcon={<DeleteIcon />} onClick={() => handleRemove(equipment)}>Remove</Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;

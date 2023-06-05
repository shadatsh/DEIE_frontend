import React from "react";
import styles from "./equipments.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import labs from "../dummy/labs.js";
import { useNavigate, useParams } from "react-router-dom";
import CartContext from "../../context/cartContext";
import { useEffect, useState, useContext } from "react";
import back from "../../assets/images/back.jpeg";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Card,
  CardMedia,
} from "@mui/material";

const Equipments = () => {
  const { labId } = useParams();
  const [lab, setLab] = useState({});
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { cart, addEquipment, removeEquipment } = useContext(CartContext);

  const handleAdd = (equipment) => {
    console.log(equipment);
    addEquipment(equipment);
    console.log(cart, "fdv");
  };

  const handleRemove = (equipment) => {
    removeEquipment(equipment);
  };

  useEffect(() => {
    setLab(() => labs.find((lab) => lab.id === Number(labId)));
  }, []);

  const handleClickOpen = (equipment) => {
    setSelectedEquipment(equipment);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setSelectedEquipment(null);
    setDialogOpen(false);
  };

  return (
    <div className={styles.equibackContainer}>
    <div className={styles.container}>
      {lab && (
        <>
          


          <div className={styles.title}>
            <h2>{lab.name}</h2>
          </div>

          <div className={styles.optionContainer}>
            <div className={styles.search}>
              <div className={styles.searchBox}>
                <input type="text" placeholder="Search" />
                <SearchIcon />
              </div>
            </div>
            <div className={styles.filter}>
              <div className={styles.filterBox}>
                <input type="text" placeholder="Filter" />
                <FilterAltIcon />
              </div>
            </div>
          </div>

          <div className={styles.equipmentContainer}>
            {lab.equipments &&
              lab.equipments.map((equipment) => {
                return (
                  <div
                    onClick={() => handleClickOpen(equipment)}
                    key={equipment.id}
                    className={styles.equipment}
                  >
                    <div className={styles.equipmentImage}>
                      <img src={equipment.imageURL} alt="" />
                    </div>
                    <div className={styles.equipmentName}>{equipment.name}</div>
                  </div>
                );
              })}

{selectedEquipment && (
  <Dialog open={dialogOpen} onClose={handleClose}>
    <div className={styles.dialogContainer}>
      {selectedEquipment.imageURL && <CardMedia component="img" image={selectedEquipment.imageURL} />}
      <div className={styles.dialogTitleContainer}>
        <div className={styles.dialogNumber}>#{selectedEquipment.id}</div>
        <DialogTitle className={styles.dialogTitle}>{selectedEquipment.name}</DialogTitle>
      </div>
      <DialogActions className={styles.dialogActions}>
        <Button onClick={() => handleAdd(selectedEquipment)} className={styles.dialogButton}>Add</Button>
        <Button onClick={() => handleRemove(selectedEquipment)} className={styles.dialogButton}>Remove</Button>
        <Button onClick={handleClose} className={styles.dialogButton}>Close</Button>
      </DialogActions>
    </div>
  </Dialog>
)}

          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Equipments;

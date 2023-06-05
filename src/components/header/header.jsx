import React, { useEffect } from "react";
import styles from "./header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import Cookies from "js-cookie";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { cart } = useContext(CartContext);
  const { user, setUser, logout } = useContext(AuthContext);

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      try {
        setUser(JSON.parse(user));
      } catch (error) {
        console.error("Invalid JSON string in user cookie:", user);
        setUser(null);
      }
    }
  }, []);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleContainer}>DEIEprolab</div>
      <div className={styles.navContainer}>
        <Link to="/">Home</Link>
        <Link to="/cart" className={styles.parent}>
          <ShoppingCartIcon />
          <div className={`cartCount ${styles.cartCount}`}>{cart.length}</div>
        </Link>

        {user == null ? (
          <div>
            You are not logged in :{" "}
            <b>
              <Link to="/student-login">Login</Link>
            </b>
          </div>
        ) : (
          <div>Hi! {user && user.name} </div>
        )}
        <div>
          <div>
            <MenuIcon
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Home Page</MenuItem>

            {user && <MenuItem onClick={logout}>Logout</MenuItem>}
          </Menu>
        </div>
      </div>
    </div>
  );
};
export default Header;
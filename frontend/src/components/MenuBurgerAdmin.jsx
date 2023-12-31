import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import menuburger from "../assets/menuburger.svg";
import styles from "./MenuBurger.module.scss";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.burgerButton}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={menuburger} alt="menu-burgerButton" />
      </Button>
      <Menu
        className={styles.menu}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        PaperProps={{ style: { backgroundColor: "#005798" } }}
      >
        {/* Move the links outside the MenuItem */}
        <Link to="/admin-dashbord" className={styles.menuLink}>
          Dashbord
        </Link>{" "}
      </Menu>
    </div>
  );
}

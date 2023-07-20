import React from "react";
import Button from "@mui/material/Button";

import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

import menuburger from "../assets/menuburger.svg";
import styles from "./MenuBurger.module.scss";

export default function MenuBurger() {
  const { user } = useUserContext();
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
        <Link to="/choice" className={styles.menuLink}>
          Accueil
        </Link>{" "}
        <br />
        <Link to={`/program/${user.id}`} className={styles.menuLink}>
          {" "}
          Mon programme
        </Link>
      </Menu>
    </div>
  );
}

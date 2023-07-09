import { React } from "react";
import styles from "./Choice.module.scss";
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';

export default function Choice(){
  const navigate = useNavigate();

const handleClick= ()=> {
  navigate('/activities');
}
    return (
<div className={styles.pageContainer}>
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
    <div className={styles.activityModal}>
      <button type="button" onClick={handleClick}>Activités</button>
    </div>
    </div>
    )
}
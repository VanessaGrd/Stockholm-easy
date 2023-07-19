import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbarlinks}>
        <li className={styles.headerLinks}>
          <NavLink to="/choice">Accueil</NavLink>
        </li>
        <li className={styles.headerLinks}>
          <NavLink to="/activities">Activités</NavLink>
        </li>
        <li className={styles.headerLinks}>
          <NavLink to="/program">Programme</NavLink>
        </li>
      </ul>
    </nav>
  );
}

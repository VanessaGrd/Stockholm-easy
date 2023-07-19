import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export default function NavbarAdmin() {
  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.navbarlinks}>
        <li className={styles.headerLinks}>
          <NavLink to="/admin-dashbord">Dashbord</NavLink>
        </li>
        <li className={styles.headerLinks}>
          <NavLink to="/activity-modify">Activités</NavLink>
        </li>
      </ul>
    </nav>
  );
}

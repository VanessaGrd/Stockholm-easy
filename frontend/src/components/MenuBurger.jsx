import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUserContext } from "../contexts/UserContext";
import logout2 from "../assets/logout2.svg";
import program from "../assets/program.svg";
import choice from "../assets/choice.svg";
import styles from "./MenuBurger.module.scss";

export default function MenuBurger() {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { logout } = useUserContext();
  // Fonction de déconnexion
  const handleLogout = () => {
    logout();
    toast.success("Déconnexion réussie !");
    navigate("/login");
  };

  return (
    <nav className={styles.nav}>
      <input id="menu" type="checkbox" />
      <label htmlFor="menu">Menu</label>
      <ul className={styles.menu}>
        <li>
          <a onClick={handleLogout} href="#0">
            <img src={logout2} alt="logout" />{" "}
          </a>
        </li>
        <li>
          <Link to={`/program/${user.id}`}>
            <img src={program} alt="program" />{" "}
          </Link>
        </li>
        <li>
          <Link to="/choice">
            {" "}
            <img src={choice} alt="choice" />{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

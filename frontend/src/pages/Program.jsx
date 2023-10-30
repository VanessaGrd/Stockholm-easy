import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import link from "../assets/link.svg";
import MenuBurger from "../components/MenuBurger";
import styles from "./Program.module.scss";
import logo from "../assets/programLogo.svg";
import Title from "../components/Title";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function Program() {
  const [programActivities, setProgramActivities] = useState();
  const { id } = useParams();
  // récupère les informations du program en fonction du user_id
  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/program-user/${id}`)
      .then((response) => setProgramActivities(response.data))
      .catch((err) => console.error(err));
  }, []);

  if (!programActivities) return null;

  return (
    <div className={styles.pageContainer}>
      <MenuBurger />
      <Title subTitle="Mon programme" />
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.activity_list_container}>
        {programActivities.map((activity) => (
          <div className={styles.activity_card_container}>
            <div className={styles.rightContainer}>
              <img
                src={activity.activity_picture}
                alt={activity.activity_name}
              />
            </div>
            <div key={activity.program_id} className={styles.leftContainer}>
              <h2> {activity.activity_name}</h2>
              <p>
                <strong>Adresse :</strong> {activity.activity_address}
              </p>
              <p>
                <strong>Horaires : </strong>
                {activity.activity_openingHours}
              </p>
              <p>
                <strong>Prix : </strong>
                {activity.activity_price}€
              </p>{" "}
              <p className={styles.link}>
                <strong>Site web :</strong>{" "}
                <Link to={activity.website}>
                  <img src={link} alt={activity.website} />
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

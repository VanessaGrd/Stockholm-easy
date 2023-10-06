import { useEffect, useState } from "react";

import axios from "axios";
import MenuBurger from "../components/MenuBurger";

import ActivityCard from "../components/ActivityCard";
import "react-toastify/dist/ReactToastify.css";

import styles from "./ActivityList.module.scss";
import activityLogo from "../assets/activity.svg";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function ActivityList() {
  const [listActivities, setListActivities] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/activity`)
      .then((response) => setListActivities(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.pageContainer}>
      <MenuBurger />
      <div className={styles.logo}>
        <img src={activityLogo} alt="logo" />
      </div>

      <div className={styles.activity_list_container}>
        {listActivities.map((activity) => (
          <div className={styles.modalesContainer}>
            <ActivityCard key={activity.id} activity={activity} />
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./ActivityList.module.scss";
import map from "../assets/map.svg";
import ActivityCardModify from "../components/ActivityCardModify";
import MenuBurgerAdmin from "../components/MenuBurgerAdmin";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function ActivityModify() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  // mise à jour de la liste d"activités après une suppression
  const updateActivitiesAfterDelete = () => {
    axios
      .get(`${apiBaseUrl}/activity`)
      .then((response) => setActivities(response.data))
      .catch((err) => console.error(err));
  };
  // 2ème requête pour refresh la liste d'activités
  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/activity`)
      .then((response) => setActivities(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.pageContainer}>
      <MenuBurgerAdmin />
      <div className={styles.logo}>
        <img src={map} alt="logo" />
      </div>

      <div className={styles.activity_list_container}>
        {activities.map((activity) => (
          <ActivityCardModify
            key={activity.id}
            activity={activity}
            selectedActivity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
            setActivities={setActivities}
            updateActivitiesAfterDelete={updateActivitiesAfterDelete}
          />
        ))}
      </div>
    </div>
  );
}

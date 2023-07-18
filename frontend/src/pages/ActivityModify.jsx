import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../components/ActivityList.module.scss";
import logo from "../assets/logo.png";
import ActivityCardModify from "../components/ActivityCardModify";

const apiBaseUrl = import.meta.env.VITE_BACKEND_URL;

export default function ActivityModify() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/activity`)
      .then((response) => setActivities(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.activity_list_container}>
        {activities.map((activity) => (
          <ActivityCardModify
            key={activity.id}
            activity={activity}
            selectedActivity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
            setActivities={setActivities}
          />
        ))}
      </div>
    </div>
  );
}

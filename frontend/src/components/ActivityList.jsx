import { useEffect, useState } from "react";
import axios from "axios";
import ActivityCard from "./ActivityCard";
import styles from "./ActivityList.module.scss";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function ActivityList() {
  const [listActivities, setListActivities] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/activity`)
      .then((response) => setListActivities(response.data))
      .catch((err) => console.error(err));
  }, []);

  console.info(listActivities);

  return (
    <div className={styles.activity_list_container}>
      {listActivities.map((activity) => (
        <ActivityCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
}

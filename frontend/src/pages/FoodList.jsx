import { useEffect, useState } from "react";

import axios from "axios";
import MenuBurger from "../components/MenuBurger";

import FoodCard from "../components/FoodCard";
import "react-toastify/dist/ReactToastify.css";

import styles from "./ActivityList.module.scss";
import activityLogo from "../assets/activity.svg";
import Title from "../components/Title";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function ActivityList() {
  const [listFood, setListFood] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/food`)
      .then((response) => setListFood(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.pageContainer}>
      <MenuBurger />
      <Title subTitle="Activités" />
      <div className={styles.logo}>
        <img src={activityLogo} alt="logo" />
      </div>
      <div className={styles.activity_list_container}>
        {listFood.map((food) => (
          <div className={styles.modalesContainer}>
            <FoodCard key={food.id} food={food} />
          </div>
        ))}
      </div>
    </div>
  );
}

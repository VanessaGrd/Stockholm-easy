import PropTypes from "prop-types";
import styles from "./ActivityCard.module.scss";

export default function TelephoneCard({ activity }) {
  return (
    <div className={styles.activity_card_container}>
      <div className={styles.leftContainer}>
        <p>{activity.name}</p>
        <p>{activity.address}</p>
        <p>{activity.openingHours}</p>
        <p>{activity.price}</p>
      </div>
      <div className={styles.rightContainer}>
        <img src={activity.picture} alt={activity.name} />
      </div>
    </div>
  );
}

TelephoneCard.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      opningHours: PropTypes.string.isRequired,
    })
  ).isRequired,
};

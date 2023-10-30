import PropTypes from "prop-types";
import styles from "./Title.module.scss";

export default function Title({ subTitle }) {
  return (
    <div className={styles.nine}>
      <h1>
        Stockholm Easy <span>{subTitle}</span>
      </h1>
    </div>
  );
}
Title.propTypes = {
  subTitle: PropTypes.string.isRequired,
};

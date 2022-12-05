import styles from "./Date.module.css";

const Date = (props) => {
  return <p className={styles.date}>{props.date}</p>;
};

export default Date;

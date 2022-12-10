import styles from "./DayTitleAndPoints.module.css";

const DayTitleAndPoints = (props) => {
  return (
    <div className={styles.dayTitleAndPoints}>
      <p>{props.dtitle}</p>
      <p>{props.dpoints}</p>
    </div>
  );
};

export default DayTitleAndPoints;

import styles from "./DayTitleAndPoints.module.css";
import Link from "next/link.js";
import React from "react";

const DayTitleAndPoints = (props) => {
  return (
    <Link href={"main/" + props.id}>
      <React.Fragment>
        <div className={styles.dayTitleAndPoints}>
          <p className={styles.dayTitle}>{props.dayTitle}</p>
          <p className={styles.dayPoints}>{props.dayPoints}</p>
        </div>
      </React.Fragment>
    </Link>
  );
};

export default DayTitleAndPoints;

import styles from "./ArticlePoints.module.css";

const ArticlePoints = ({ points }) => {
  return <p className={styles.points}>{points}</p>;
};

export default ArticlePoints;
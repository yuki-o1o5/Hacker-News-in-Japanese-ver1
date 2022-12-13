import styles from "./ArticleTime.module.css";

const ArticleTime = ({ time }) => {
  return <p className={styles.atime}>{time}</p>;
};

export default ArticleTime;

//

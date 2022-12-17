import styles from "./ArticleNumber.module.css";

const ArticleNumber = ({ articleNumber }) => {
  return <i className={styles.number}>{articleNumber}</i>;
};

export default ArticleNumber;

//

import styles from "./ArticleNumber.module.css";

const ArticleNumber = ({ anumber }) => {
  return <i className={styles.number}>{anumber}</i>;
};

export default ArticleNumber;

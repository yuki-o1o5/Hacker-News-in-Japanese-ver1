import styles from "./ArticleNumber.module.css";

const ArticleNumber = (props) => {
  return <p className={styles.number}>{props.number}</p>;
};

export default ArticleNumber;

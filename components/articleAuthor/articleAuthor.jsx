import styles from "./ArticleAuthor.module.css";

const ArticleAuthor = (props) => {
  return <p className={styles.author}>{props.author}</p>;
};

export default ArticleAuthor;

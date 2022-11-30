import styles from "./ArticleAuthor.module.css";

const ArticleAuthor = ({ author }) => {
  return <p className={styles.author}>{author}</p>;
};

export default ArticleAuthor;

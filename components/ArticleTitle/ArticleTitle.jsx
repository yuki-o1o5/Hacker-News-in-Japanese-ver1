import styles from "./ArticleTitle.module.css";

const ArticleTitle = ({ atitle }) => {
  return <h2 className={styles.article_title}>{atitle}</h2>;
};

export default ArticleTitle;

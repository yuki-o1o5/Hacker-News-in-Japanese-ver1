import styles from "./ArticlesCategoryTitle.module.css";

const ArticlesCategoryTitle = (props) => {
  return <p className={styles.categoryTitle}>{props.categoryTitle}</p>;
};

export default ArticlesCategoryTitle;

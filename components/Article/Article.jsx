import ArticleNumber from "../articleNumber/articleNumber";
import ArticleTitle from "../articleTitle/articleTitle";
import ArticleAuthor from "../articleAuthor/articleAuthor";
import ArticleTime from "../articleTime/articleTime";
import ArticlePoints from "../articlePoints/articlePoints";
import styles from "./Article.module.css";

const Article = () => {
  return (
    <div className={styles.article_primary_container}>
      <div className={styles.article_number}>
        <ArticleNumber />
      </div>
      <div className={styles.article_secondary_container}>
        <ArticleTitle />
        <div className={styles.article_tertiary_container}>
          <div className={styles.tertiary_container_children}>
            <ArticleAuthor />
          </div>
          <div className={styles.tertiary_container_children}>
            <ArticleTime />
          </div>
          <div className={styles.tertiary_container_children}>
            <ArticlePoints />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;

import ArticleTitle from "../ArticleTitle/ArticleTitle";
import ArticleAuthor from "../articleAuthor/articleAuthor";
import ArticleTime from "../ArticleTime/ArticleTime";
import ArticlePoints from "../ArticlePoints/ArticlePoints";
import styles from "./Article.module.css";

const Article = ({ articleTitle, author, time, points }) => {
  return (
    <div className={styles.article_primary_container}>
        <ArticleTitle articleTitle={articleTitle} />
        <div className={styles.article_secondry_container}>
          <div className={styles.tertiary_container_children}>
            <ArticleAuthor author={author} />
          </div>
          <div className={styles.tertiary_container_children}>
            <ArticleTime time={time} />
          </div>
          <div className={styles.tertiary_container_children}>
            <ArticlePoints points={points} />
          </div>
        </div>
    </div>
  );
};

export default Article;

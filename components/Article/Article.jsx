import ArticleNumber from "../articleNumber/articleNumber";
import ArticleTitle from "../articleTitle/articleTitle";
import ArticleAuthor from "../articleAuthor/articleAuthor";
import ArticleTime from "../articleTime/articleTime";
import ArticlePoints from "../articlePoints/articlePoints";
import styles from "./Article.module.css";

const Article = ({ anumber, atitle, author, time, points }) => {
  return (
    <div className={styles.article_primary_container}>
      <div className={styles.article_number}>
        <ArticleNumber anumber={anumber} />
      </div>
      <div className={styles.article_secondary_container}>
        <ArticleTitle atitle={atitle} />
        <div className={styles.article_tertiary_container}>
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
    </div>
  );
};

export default Article;

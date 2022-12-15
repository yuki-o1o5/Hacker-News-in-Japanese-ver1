import { useEffect, useState } from "react";
import ArticleTitle from "../ArticleTitle/ArticleTitle.jsx";
import ArticleAuthor from "../ArticleAuthor/ArticleAuthor.jsx";
import ArticleTime from "../ArticleTime/ArticleTime.jsx";
import ArticlePoints from "../ArticlePoints/ArticlePoints.jsx";
import ArticleNumber from "../ArticleNumber/ArticleNumber.jsx";
import styles from "./Article.module.css";
import Link from "next/link.js";

const Article = ({ articleTitle, author, time, points, id, index }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // console.log(id);
  return (
    <>
      {isClient ? (
        <Link href={"main/" + id}>
          <div className={styles.article_primary_container}>
            <div className={styles.article_number_container}>
              <ArticleNumber articleNumber={index} />
            </div>
            <div className={styles.article_secondry_container}>
              <ArticleTitle articleTitle={articleTitle} />
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
        </Link>
      ) : null}
    </>
  );
};

export default Article;

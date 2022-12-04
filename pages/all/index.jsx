import { useEffect, useState } from "react";
import Article from "../../components/Article/Article.jsx";
import ArticleCategoryTitle from "../../components/articlesCategoryTitle/articlesCategoryTitle.jsx";
import PageDescription from "../../components/pageDescription/pageDescription.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";

export async function getStaticProps() {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=3&orderBy="$key"`
  );
  const hackerTopIds = await res.json();

  return {
    props: { hackerTopIds },
    revalidate: 10,
  };
}

const Allpage = (props) => {
  useEffect(() => {
    fetchArticleDetails(props.hackerTopIds);
  }, [props.hackerTopIds]);

  const [articles, setArticles] = useState([]);

  const fetchArticleDetails = async (hackerTopIds) => {
    hackerTopIds.forEach(async (id) => {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/item/" +
          id +
          ".json?print=pretty"
      );
      const details = await res.json();
      setArticles((prev) => [...prev, details]);
    });
  };

  return (
    <div>
      <PageTitle />
      <div className={"main_container"}>
        <ArticleCategoryTitle categoryTitle={"Recent in One Hour"} />
        <div>
          {articles.map((article) => (
            <Article
              anumber="1"
              // key={`article-list-${i}`}
              atitle={article.title}
              author={article.by}
              time={article.time}
              points={article.score}
            />
          ))}
        </div>
        <PageDescription />
      </div>
    </div>
  );
};

export default Allpage;

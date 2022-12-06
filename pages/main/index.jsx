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

const Mainpage = (props) => {
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

  // const deepl = require("deepl-node");

  // const authKey = "58f5a663-e31d-2c7e-c726-c4ae06402ab6:fx";
  // const translator = new deepl.Translator(authKey);

  // translator
  //   .getUsage()
  //   .then((usage) => {
  //     console.log(usage);
  //     return translator.translateText("Hello, world!", null, "fr");
  //   })
  //   .then((result) => {
  //     console.log(result.text); // Bonjour, le monde !
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //     process.exit?.(1);
  //   });
  console.log(articles);

  return (
    <div>
      <PageTitle />
      <div className={"main_container"}>
        <ArticleCategoryTitle categoryTitle={"Recent in One Hour"} />
        <div>
          {articles.map((article) => (
            <Article
              anumber="1"
              atitle={article.title}
              author={article.by}
              time={article.time}
              points={article.score}
              // {article.id} --> id
            />
          ))}
        </div>
        <PageDescription />
      </div>
    </div>
  );
};

export default Mainpage;

import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";
import DetailArticleCategoryTitle from "../../components/DetailArticleCategoryTitle/DetailArticleCategoryTitle.jsx";
import DetailArticleCommentChild from "../../components/DetailArticleCommentChild/DetailArticleCommentChild.jsx";
import DetailArticleCommentParent from "../../components/DetailArticleCommentParent/DetailArticleCommentParent.jsx";
import DetailArticleText from "../../components/DetailArticleText/DetailArticleText.jsx";
import DetailArticleTitle from "../../components/DetailArticleTitle/DetailArticleTitle.jsx";
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

export async function getStaticPaths() {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=3&orderBy="$key"`
  );
  const hackerTopIds = await res.json();

  const paths = hackerTopIds.map((hackerTopId) => ({
    params: { id: hackerTopId.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

const Detailpage = (props) => {
  const router = useRouter();
  const hoge = router.query.id;
  console.log(hoge);

  useEffect(() => {
    fetchArticleDetails(hoge);
  }, [hoge]);

  useEffect(() => {
    fetchCommentDetails(comment);
  }, [comment]);

  const [article, setArticles] = useState({});

  const [comment, setComments] = useState({});

  const fetchArticleDetails = async (hackerTopId) => {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/item/" +
        hackerTopId +
        ".json?print=pretty"
    );
    const details = await res.json();
    // console.log(details);
    setArticles(details);

    const fetchCommentDetails = async (commentId) => {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/item/" +
          commentId +
          ".json?print=pretty"
      );
      const comments = await res.json();
      setComments(comments);
    };
  };

  // console.log(article.kids[0]);

  return (
    <div>
      <PageTitle />
      <div className={"main_container"}>
        <div className="detail_article_title_container">
          <DetailArticleTitle detailarticletitle={article.title} />
        </div>
        <div className="article_text_container">
          <DetailArticleCategoryTitle
            detailarticlecategorytitle={"Article Summary"}
          />
          <div className="main_text-container">
            <DetailArticleText
              detailarticletext={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor nec feugiat nisl pretium. Purus non enim praesent elementum facilisis. Ultrices sagittis orci a scelerisque purus semper eget duis. At lectus urna duis convallis convallis tellus. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Ut sem nulla pharetra diam sit. Id donec ultrices tincidunt."
              }
            />
          </div>
        </div>
        <div className="article_text_container">
          <DetailArticleCategoryTitle
            detailarticlecategorytitle={"Top Comment"}
          />
          <div className="secondry_text-container">
            <DetailArticleCommentParent
              detailarticlecommentparent={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
            <DetailArticleCommentChild
              detailarticlecommentchild={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;

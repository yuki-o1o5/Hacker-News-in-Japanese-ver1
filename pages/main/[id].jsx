import { useRouter } from "next/router.js";
import DetailArticleCategoryTitle from "../../components/DetailArticleCategoryTitle/DetailArticleCategoryTitle.jsx";
import DetailArticleCommentChild from "../../components/DetailArticleCommentChild/DetailArticleCommentChild.jsx";
import DetailArticleCommentParent from "../../components/DetailArticleCommentParent/DetailArticleCommentParent.jsx";
import DetailArticleText from "../../components/DetailArticleText/DetailArticleText.jsx";
import DetailArticleTitle from "../../components/DetailArticleTitle/DetailArticleTitle.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";



// export async function getStaticProps() {
//   const res = await fetch(
//     `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
//   );
//   const topstories = await res.json();

//   return {
//     props: { topstories },
//     revaliade: 10,
//   };
// }

// export async function getStaticPaths() {
//   const res = await fetch(
//     `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`
//   );
//   const topstories = await res.json();

//   const paths = topstories.map((topstory) => ({
//     params: { id: topstory.id },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

const Detailpage = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <div>
      <p>post:{id}</p>
      <PageTitle />
      <div className={"main_container"}>
        <div className="detail_article_title_container">
          <DetailArticleTitle
            detailarticletitle={"faucibus ornare suspendisse sednisi lacus sed"}
          />
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

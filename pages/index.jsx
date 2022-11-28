import ArticleAuthor from "../components/ArticleAuthor/ArticleAuthor.jsx";
import ArticleNumber from "../components/articleNumber/articleNumber.jsx";
import ArticlePoints from "../components/articlePoints/articlePoints.jsx";
import ArticleCategoryTitle from "../components/articlesCategoryTitle/articlesCategoryTitle.jsx";
import ArticleTime from "../components/articleTime/articleTime.jsx";
import ArticleTitle from "../components/articleTitle/articleTitle.jsx";
import PageDescription from "../components/pageDescription/pageDescription.jsx";
import PageTitle from "../components/PageTitle/PageTitle.jsx";

// *Article tag does not work.
// const Home = () => {
//   return (
//     <div>
//       <PageTitle />
//       <div className={"maincontainer"}>
//         <Article number={"1"} articleTitle={"aaaaaaaaaaaaaaaaaaaaaaaaaaaa"} />
//       </div>
//     </div>
//   );
// };

// export default Home;

const mainPage = () => {
  return (
    <div>
      <PageTitle />
      <div className={"main_container"}>
        <ArticleCategoryTitle categoryTitle={"Recent in One Hour"} />
        <div className={"article_container"}>
          <div className={"article_number"}>
            <ArticleNumber number={"1"} />
          </div>
          <div className={"article_description_container"}>
            <ArticleTitle
              articleTitle={"faucibus ornare suspendisse sednisi lacus sed"}
            />
            <div className={"article_secondary_description_container"}>
              <div className={"article_description_title"}>
                <ArticleAuthor author={"by nunc sed"} />
              </div>
              <div className={"article_description_title"}>
                <ArticleTime time={"published time"} />
              </div>
              <div className={"article_description_title"}>
                <ArticlePoints points={"96 points"} />
              </div>
            </div>
          </div>
        </div>
        <div className={"article_container"}>
          <div className={"article_number"}>
            <ArticleNumber number={"2"} />
          </div>
          <div className={"article_description_container"}>
            <ArticleTitle
              articleTitle={"faucibus ornare suspendisse sednisi lacus sed"}
            />
            <div className={"article_secondary_description_container"}>
              <div className={"article_description_title"}>
                <ArticleAuthor author={"by nunc sed"} />
              </div>
              <div className={"article_description_title"}>
                <ArticleTime time={"published time"} />
              </div>
              <div className={"article_description_title"}>
                <ArticlePoints points={"96 points"} />
              </div>
            </div>
          </div>
        </div>
        <div className={"article_container"}>
          <div className={"article_number"}>
            <ArticleNumber number={"3"} />
          </div>
          <div className={"article_description_container"}>
            <ArticleTitle
              articleTitle={"faucibus ornare suspendisse sednisi lacus sed"}
            />
            <div className={"article_secondary_description_container"}>
              <div className={"article_description_title"}>
                <ArticleAuthor author={"by nunc sed"} />
              </div>
              <div className={"article_description_title"}>
                <ArticleTime time={"published time"} />
              </div>
              <div className={"article_description_title"}>
                <ArticlePoints points={"96 points"} />
              </div>
            </div>
          </div>
        </div>
        <div className="page_description">
          <PageDescription />
        </div>
      </div>
    </div>
  );
};

export default mainPage;

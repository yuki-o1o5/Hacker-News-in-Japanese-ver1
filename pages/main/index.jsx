import Article from "../../components/Article/Article.jsx";
import ArticleCategoryTitle from "../../components/articlesCategoryTitle/articlesCategoryTitle.jsx";
import PageDescription from "../../components/pageDescription/pageDescription.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";

const Mainpage = () => {
  return (
    <div>
      <PageTitle />
      <div className={"main_container"}>
        <ArticleCategoryTitle categoryTitle={"Recent in One Hour"} />

        <Article
          anumber="1"
          atitle="faucibus ornare suspendisse sed nisi lacus sed"
          author="by nunc sed"
          time="2022,01,01"
          points="96 p0ints"
        />

        <Article
          anumber="2"
          atitle="faucibus ornare suspendisse sed nisi lacus sed"
          author="by nunc sed"
          time="2022,01,01"
          points="96 p0ints"
        />

        <Article
          anumber="3"
          atitle="faucibus ornare suspendisse sed nisi lacus sed"
          author="by nunc sed"
          time="2022,01,01"
          points="96 p0ints"
        />

        <PageDescription />
      </div>
    </div>
  );
};

export default Mainpage;

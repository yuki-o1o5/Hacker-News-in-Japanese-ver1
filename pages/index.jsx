import Article from "../components/Article/Article.jsx";
import ArticleCategoryTitle from "../components/ArticlesCategoryTitle/ArticlesCategoryTitle.jsx";
import PageDescription from "../components/PageDescription/PageDescription.jsx";
import PageTitle from "../components/PageTitle/PageTitle.jsx";
import * as deepl from "deepl-node";

const Home = () => {
  
  // deepl
  // const authKey = process.env["DEEPL_AUTH_KEY"];
  // const serverUrl = process.env["DEEPL_SERVER_URL"];
  // const translator = new deepl.Translator(authKey, { serverUrl: serverUrl });

  // (async () => {
  //   try {
  //     console.log(await translator.getUsage());

  //     const result = await translator.translateText(
  //       "Hello, world!",
  //       null,
  //       "fr"
  //     );

  //     console.log(result.text); // Bonjour, le monde !
  //   } catch (error) {
  //     console.log(error);
  //     process.exit(1);
  //   }
  // })();


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

export default Home;

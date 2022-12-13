import Article from "../../components/Article/Article.jsx";
import ArticleCategoryTitle from "../../components/ArticlesCategoryTitle/ArticlesCategoryTitle.jsx";
import PageDescription from "../../components/PageDescription/PageDescription.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";

export async function getStaticProps() {
  // 1.This is top 3 story ids.
  const resOne = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=3&orderBy="$key"`
  );
  const topstories = await resOne.json();

  // 2.This is each story details.
  const getDetailUrl = async (id) => {
    const detail = await fetch(
      "https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty"
    );
    const eachStoryDetails = await detail.json();
    return eachStoryDetails;
  };

  const stories = await Promise.all(
    topstories.map((topstory) => getDetailUrl(topstory))
  );

  return {
    props: { stories },
    revalidate: 10,
  };
}

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

const Mainpage = (props) => {
  console.log(props.stories);
  return (
    <div>
      <PageTitle />
      <div className={"main_container"}>
        <ArticleCategoryTitle categoryTitle={"Recent in One Hour"} />
        <div className={"flex_container"}>
          <div className="tertiary_container">
            {props.stories.map((story, i) => (
              <Article
                key={`story-list-${i}`}
                articleTitle={story.title}
                author={story.by}
                time={story.time}
                points={story.score}
                id={story.id}
                index={i + 1}
              />
            ))}
          </div>
        </div>
        <PageDescription />
      </div>
    </div>
  );
};

export default Mainpage;

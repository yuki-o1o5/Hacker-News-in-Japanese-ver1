import Article from "../../components/Article/Article.jsx";
import ArticleCategoryTitle from "../../components/articlesCategoryTitle/articlesCategoryTitle.jsx";
import PageDescription from "../../components/pageDescription/pageDescription.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";

export async function getStaticProps() {
  const resone = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=3&orderBy="$key"`
  );

  const restwo = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty"`
  );

  const topstories = await resone.json();
  const eachstories = await restwo.json();

  return {
    props: { topstories, eachstories },
    revalidate: 10,
  };
}

const Mainpage = (props) => {
  const topthree = props.topstories;
  topthree.forEach((topeach) => console.log(topeach));

  console.log(props.stories);

  const eachstory = props.eachstories;
  console.log(eachstory);

  return (
    <div>
      <PageTitle />
      <div className={"main_container"}>
        <ArticleCategoryTitle categoryTitle={"Recent in One Hour"} />
        <div>
          <Article
            anumber="1"
            atitle="faucibus ornare suspendisse sed nisi lacus sed"
            author="by nunc sed"
            time="2022,01,01"
            points="96 p0ints"
          />
        </div>
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

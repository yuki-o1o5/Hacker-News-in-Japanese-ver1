import DetailArticleCategoryTitle from "../../components/DetailArticleCategoryTitle/DetailArticleCategoryTitle.jsx";
import DetailArticleCommentChild from "../../components/DetailArticleCommentChild/DetailArticleCommentChild.jsx";
import DetailArticleCommentParent from "../../components/DetailArticleCommentParent/DetailArticleCommentParent.jsx";
import DetailArticleText from "../../components/DetailArticleText/DetailArticleText.jsx";
import DetailArticleTitle from "../../components/DetailArticleTitle/DetailArticleTitle.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";

export async function getStaticProps(params) {
  // 1.This is top 3 story ids. ->[33935566,33934580,33936366]
  const resOne = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=3&orderBy="$key"`
  );
  const topstories = await resOne.json();

  // 2.This is each story details. ->[{...},{...},{...}]
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

  // 3.This is each comment. ->[{...},{...},{...}]
  const getCommentUrl = async (commentId) => {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/item/" +
        commentId +
        ".json?print=pretty"
    );
    const comments = await res.json();
    return comments;
  };

  const topComments = await Promise.all(
    topstories.map((topstory) => getCommentUrl(topstory))
  );

  return {
    props: { stories, topComments },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  // 1.This is top 3 story ids.
  const resOne = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=3&orderBy="$key"`
  );
  const topstories = await resOne.json();

  // // 2.This is each story details.
  // const getDetailUrl = async (id) => {
  //   const detail = await fetch(
  //     "https://hacker-news.firebaseio.com/v0/item/" + id + ".json?print=pretty"
  //   );
  //   const eachStoryDetails = await detail.json();
  //   return eachStoryDetails;
  // };

  // const stories = await Promise.all(
  //   topstories.map((topstory) => getDetailUrl(topstory))
  // );

  const paths = topstories.map((topstory) => ({
    params: { id: topstory.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

const Detailpage = (props) => {
  console.log(props.stories);

  return (
    <div>
      <PageTitle />
      <div className={"main_container"}>
        <div className="detail_article_title_container">
          {/* {props.stories.map((story, i) => (
            <DetailArticleTitle
              detailarticletitle={story.title}
              key={`story-list-${i}`}
            />
          ))} */}
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

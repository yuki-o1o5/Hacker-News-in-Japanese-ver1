import DetailArticleCategoryTitle from "../../components/DetailArticleCategoryTitle/DetailArticleCategoryTitle.jsx";
import DetailArticleCommentChild from "../../components/DetailArticleCommentChild/DetailArticleCommentChild.jsx";
import DetailArticleCommentParent from "../../components/DetailArticleCommentParent/DetailArticleCommentParent.jsx";
import DetailArticleText from "../../components/DetailArticleText/DetailArticleText.jsx";
import DetailArticleTitle from "../../components/DetailArticleTitle/DetailArticleTitle.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";

export async function getStaticProps(context) {
  // 1.This is an id. ->[33935566]
  const storyId = context.params.id;
  // console.log("params", context.params);

  // 2.This is a story detail. ->{...}
  const getDetailUrl = async (id) => {
    const detail = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );
    const eachStoryDetails = await detail.json();
    return eachStoryDetails;
  };
  const story = await getDetailUrl(storyId);

  // 3.This is the top comment.
  const getCommentUrl = async (commentId) => {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`
    );
    const comments = await res.json();
    return comments;
  };

  // 3.This is the comments of the top comment .
  const topComment = await getCommentUrl(story.kids[0]);
  // console.log("topComment", topComment);

  const topCommentReplies = await Promise.all(
    (topComment.kids || []).map((topCommentKid) => getCommentUrl(topCommentKid))
  );

  return {
    props: { story, topComment, topCommentReplies },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  // 1.This is top 3 story ids.
  const resOne = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=10&orderBy="$key"`
  );
  const topstories = await resOne.json();

  const paths = topstories.map((topstory) => ({
    params: { id: topstory.toString() },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

const DetailPage = ({ story, topComment, topCommentReplies }) => {
  // console.log(story);
  // console.log(topComment);
  return (
    <div>
      <PageTitle />
      <div className={"main_container"}>
        <div className="detail_article_title_container">
          <DetailArticleTitle detailarticletitle={story.title} />
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
              detailarticlecommentparent={topComment.text}
            />
            <div>
              {" "}
              {topCommentReplies.map((topCommentReply, i) => (
                <DetailArticleCommentChild
                  detailarticlecommentchild={topCommentReply.text}
                  key={`story-list-${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

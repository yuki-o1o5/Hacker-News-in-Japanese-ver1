import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import TableHeader from "../../components/TableHeader/TableHeader.jsx";
import DayTitleAndPoints from "../../components/DayTitleAndPoints/DayTitleAndPoints.jsx";

export async function getStaticProps() {
  // 1.This is top 3 story ids.
  const resOne = await fetch(
    `https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=10&orderBy="$key"`
  );
  const topstories = await resOne.json();

  // 2.This is each story details.
  const getDetailUrl = async (id) => {
    const detail = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
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

const Allpage = (props) => {
  return (
    <div>
      <PageTitle />
      <div className={"main_container"}>
        <Date date={"2022/12/01"} />
        <TableHeader />
        {props.stories.map((story, i) => (
          <DayTitleAndPoints
            key={`story-list-${i}`}
            dayTitle={story.title}
            dayPoints={story.score}
            id={story.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Allpage;

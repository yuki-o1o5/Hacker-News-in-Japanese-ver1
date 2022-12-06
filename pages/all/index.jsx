import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import TableHeader from "../../components/TableHeader/TableHeader.jsx";
import DayTitleAndPoints from "../../components/DayTitleAndPoints/DayTitleAndPoints.jsx";

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

const Allpage = (props) => {
  useEffect(() => {
    fetchArticleDetails(props.hackerTopIds);
  }, [props.hackerTopIds]);

  const [articles, setArticles] = useState([]);

  const fetchArticleDetails = async (hackerTopIds) => {
    hackerTopIds.forEach(async (id) => {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/item/" +
          id +
          ".json?print=pretty"
      );
      const details = await res.json();
      setArticles((prev) => [...prev, details]);
    });
  };

  return (
    <div>
      <PageTitle />
      <div className={"main_container"}>
        <Date date={"2022/12/01"} />
        <TableHeader />
        <DayTitleAndPoints
          dayTitle={"faucibus ornare suspendisse sed nisi lacus sed "}
          dayPoints={"96"}
        />
        <DayTitleAndPoints
          dayTitle={"faucibus ornare suspendisse sed nisi lacus sed "}
          dayPoints={"96"}
        />
        <DayTitleAndPoints
          dayTitle={"faucibus ornare suspendisse sed nisi lacus sed "}
          dayPoints={"96"}
        />
        <DayTitleAndPoints
          dayTitle={"faucibus ornare suspendisse sed nisi lacus sed "}
          dayPoints={"96"}
        />
        <DayTitleAndPoints
          dayTitle={"faucibus ornare suspendisse sed nisi lacus sed "}
          dayPoints={"96"}
        />
        <DayTitleAndPoints
          dayTitle={"faucibus ornare suspendisse sed nisi lacus sed "}
          dayPoints={"96"}
        />
        <DayTitleAndPoints
          dayTitle={"faucibus ornare suspendisse sed nisi lacus sed "}
          dayPoints={"96"}
        />
        <DayTitleAndPoints
          dayTitle={"faucibus ornare suspendisse sed nisi lacus sed "}
          dayPoints={"96"}
        />
        <DayTitleAndPoints
          dayTitle={"faucibus ornare suspendisse sed nisi lacus sed "}
          dayPoints={"96"}
        />
        <DayTitleAndPoints
          dayTitle={"faucibus ornare suspendisse sed nisi lacus sed "}
          dayPoints={"96"}
        />
      </div>
    </div>
  );
};

export default Allpage;

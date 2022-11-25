import Head from "next/head";
import Image from "next/image";
import PageTitle from "../components/PageTitle/PageTitle.jsx";

const Home = () => {
  return (
    <div>
      <PageTitle />
      <div className={"maincontainer"}></div>
    </div>
  );
};

export default Home;

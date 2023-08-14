import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Navbar from "../components/Layout/Navbar";
import ArticleContent from "../components/Layout/ArticleContent";
import LeaveAReply from "../components/Layout/LeaveAReply";
import ArticleMain from "../components/Layout/ArticleMain";
import classes from "../components/Layout/Layout.module.css";
import Hero from "../components/Layout/Hero";
import trophy from "../assets/trophy.jpg";

const NewsAndUpdatesPage = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main className={`${classes["header-container"]}`}>
        <Hero className="h-auto">
          <div className={` h-full `}>
            <img
              src={trophy}
              className={`bg-[url(${trophy})] max-h-full max-w-full bg-no-repeat bg-cover bg-center`}
              alt="news/updates hero img"
            />
          </div>
        </Hero>
        <ArticleContent />
        <ArticleMain />
        <LeaveAReply />
      </Main>
    </>
  );
};

export default NewsAndUpdatesPage;

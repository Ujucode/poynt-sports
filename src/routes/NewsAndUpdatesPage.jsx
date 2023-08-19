import Main from "../components/Layout/Main";
import ArticleContent from "../components/NewsLetterAndUpdates/ArticleContent";
import LeaveAReply from "../components/NewsLetterAndUpdates/LeaveAReply";
import ArticleMain from "../components/NewsLetterAndUpdates/ArticleMain";
import Hero from "../components/Layout/Hero";
import trophy from "../assets/trophy.jpg";

const NewsAndUpdatesPage = () => {
  return (
    <Main className="">
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
  );
};

export default NewsAndUpdatesPage;

import Header from "./UI/Header";
import Navbar from "./UI/Navbar";
import HeroMain from "./Layout/HeroMain";
import HeroFooter from "./Layout/HeroFooter";
import AthleteSection from "./Layout/AthleteSection";
import CoachesSection from "./Layout/Coaches";
import NewsAndUpdateSection from "./Layout/NewsAndUpdateSection";
import Main from "./UI/Main";
import classes from "./Layout/Layout.module.css";
import LeaveAReply from "./Layout/LeaveAReply";
const HomePage = () => {
  return (
    <>
      <Header
        className={`h-screen ${classes.hero} bg-no-repeat bg-cover bg-fixed flex flex-col justify-between text-gray-50`}
      >
        <Navbar />
        <HeroMain />
        <HeroFooter />
      </Header>
      <Main className={`${classes["header-container"]}`}>
        <AthleteSection />
        <CoachesSection />
        <NewsAndUpdateSection />
        <LeaveAReply />
      </Main>
    </>
  );
};

export default HomePage;

import Header from "../components/UI/Header";
import Navbar from "../components/UI/Navbar";
import HeroMain from "../components/Layout/HeroMain";
import HeroFooter from "../components/Layout/HeroFooter";
import AthleteSection from "../components/Layout/AthleteSection";
import CoachesSection from "../components/Layout/CoachesSection";
import NewsAndUpdateSection from "../components/Layout/NewsAndUpdateSection";
import Main from "../components/UI/Main";
import classes from "../components/Layout/Layout.module.css";

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
      </Main>
    </>
  );
};

export default HomePage;

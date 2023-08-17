import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";
import HeroMain from "../components/Home/HeroMain";
import HeroFooter from "../components/Home/HeroLinks";
import AthleteSection from "../components/Home/AthleteSection";
import CoachesSection from "../components/Home/CoachesSection";
import Mentors from "../components/Home/Mentors";
import Training from "../components/Home/Training";
import SportsOfficial from "../components/Home/SportsOfficial";
import NewsAndUpdateSection from "../components/Home/NewsAndUpdateSection";
import Main from "../components/Layout/Main";
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
        <Mentors />
        <Training />
        <SportsOfficial />
        <NewsAndUpdateSection />
      </Main>
    </>
  );
};

export default HomePage;

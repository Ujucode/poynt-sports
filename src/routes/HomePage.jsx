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

const HomePage = () => {
  return (
    <>
      <Header
        className={`h-screen hero bg-no-repeat bg-cover bg-center bg-fixed flex flex-col justify-between text-gray-50`}
      >
        <Navbar />
        <HeroMain />
        <HeroFooter />
      </Header>
      <Main className="">
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

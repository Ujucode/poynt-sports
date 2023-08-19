import Main from "../components/Layout/Main";
import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";
import HeroMain from "../components/Home/HeroMain";
import HeroFooter from "../components/Home/HeroLinks";
import AthleteSection from "../components/Home/AthleteSection";
import CoachesSection from "../components/Home/CoachesSection";
import MentorsSection from "../components/Home/MentorsSection";
import SportsOfficialSection from "../components/Home/SportsOfficialSection";
import NewsAndUpdateSection from "../components/Home/NewsAndUpdateSection";
import TrainingInstitutesAndClubsSection from "../components/Home/TrainingInstitutesAndClubsSection";

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
      <Main className="flex flex-col">
        <AthleteSection />
        <CoachesSection />
        <MentorsSection />
        <TrainingInstitutesAndClubsSection />
        <SportsOfficialSection />
        <NewsAndUpdateSection />
      </Main>
    </>
  );
};

export default HomePage;

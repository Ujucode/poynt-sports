import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Navbar from "../components/Layout/Navbar";
import TrainingInstitutesAndClubsGallery from "../components/TrainingInstitutesAndClubs/TrainingInstitutesAndClubsGallery";

const TrainingInstitutesAndClubsPage = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main className="">
        <TrainingInstitutesAndClubsGallery />
      </Main>
    </>
  );
};

export default TrainingInstitutesAndClubsPage;

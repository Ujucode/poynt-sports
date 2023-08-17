import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Navbar from "../components/Layout/Navbar";
import TrainingInstitutesAndClubsGallery from "../components/TrainingInstitutesAndClubs/TrainingInstitutesAndClubsGallery";
import classes from "../components/Layout/Layout.module.css";

const TrainingInstitutesAndClubsPage = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main className={`${classes["header-container"]}`}>
        <TrainingInstitutesAndClubsGallery />
      </Main>
    </>
  );
};

export default TrainingInstitutesAndClubsPage;

import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Navbar from "../components/Layout/Navbar";
import VenueGallery from "../components/Venues/VenueGallery";
import classes from "../components/Layout/Layout.module.css";

const VenuePage = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main className={`${classes["header-container"]}`}>
        <VenueGallery />
      </Main>
    </>
  );
};

export default VenuePage;

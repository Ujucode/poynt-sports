import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Navbar from "../components/Layout/Navbar";
import VenueGallery from "../components/Venues/VenueGallery";

const VenuePage = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main className={``}>
        <VenueGallery />
      </Main>
    </>
  );
};

export default VenuePage;

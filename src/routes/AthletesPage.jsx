import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";
import Main from "../components/Layout/Main";
import AthletesGallery from "../components/Athletes/AthletesGallery";

const AthletesPage = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main className="">
        <AthletesGallery />
      </Main>
    </>
  );
};

export default AthletesPage;

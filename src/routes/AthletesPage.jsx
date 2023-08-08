import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";
import Main from "../components/Layout/Main";
import AthletesGallery from "../components/Athletes/AthletesGallery";
import classes from "../components/Layout/Layout.module.css";

const AthletesPage = () => {
  return (
    <>
      <Header className={`bg-gradient-to-r from-green-200 to-green-700`}>
        <Navbar />
      </Header>
      <Main className={`${classes["header-container"]}`}>
        <AthletesGallery />
      </Main>
    </>
  );
};

export default AthletesPage;
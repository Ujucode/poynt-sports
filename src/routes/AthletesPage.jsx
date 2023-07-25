import Header from "../components/UI/Header";
import Navbar from "../components/UI/Navbar";
import Main from "../components/UI/Main";
import AthletesGallery from "../components/Layout/AthletesGallery";
import classes from "../components/Layout/Layout.module.css";

const AthletesPage = () => {
  return (
    <>
      <Header
        className={`bg-gradient-to-r from-green-200 to-green-700  bg-no-repeat bg-cover bg-fixed flex flex-col justify-between text-gray-50`}
      >
        <Navbar />
      </Header>
      <Main className={`${classes["header-container"]}`}>
        <AthletesGallery />
      </Main>
    </>
  );
};

export default AthletesPage;

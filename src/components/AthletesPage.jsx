import Header from "./UI/Header";
import Navbar from "./UI/Navbar";
import Main from "./UI/Main";
import AthletesGallery from './Layout/AthletesGallery'
import classes from "./Layout/Layout.module.css";

const AthletesPage = () => {
  return (
    <>
      <Header
        className={`bg-gradient-to-r from-green-200 to-green-700  bg-no-repeat bg-cover bg-fixed flex flex-col justify-between text-gray-50`}
      >
        <Navbar />
        <Main className={`${classes["header-container"]}`}>
          <AthletesGallery />
        </Main>
      </Header>
    </>
  );
};

export default AthletesPage;

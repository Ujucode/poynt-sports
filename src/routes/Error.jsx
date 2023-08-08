import { useRouteError } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import classes from "../components/Layout/Layout.module.css";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import Main from "../components/UI/Main";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <Header className={`bg-gradient-to-r from-green-200 to-green-700`}>
        <Navbar />
      </Header>
      <Main
        className={`${classes["header-container"]} text-2xl text-azure-500 `}
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Main>
      <Footer />
    </>
  );
};

export default Error;

import { useRouteError } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import classes from "../components/Layout/Layout.module.css";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Main from "../components/Layout/Main";

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

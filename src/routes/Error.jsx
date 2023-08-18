import { useRouteError } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Main from "../components/Layout/Main";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main className={`text-2xl text-azure-500 `}>
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

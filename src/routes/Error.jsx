import { useRouteError } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import classes from "../components/Layout/Layout.module.css";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

const Error = () => {
  const error = useRouteError();
  return (
    <div className={` h-screen bg-gradient-to-r from-green-200 to-green-700`}>
      <Header>
        <Navbar />
      </Header>
      <main
        className={`${classes["header-container"]} h-[70vh] grid place-content-center text-6xl text-azure-500 `}
      >
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Error;

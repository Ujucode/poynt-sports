import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Navbar";

const Root = () => {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <>
        <Outlet />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

import { Outlet } from "react-router-dom";
import Footer from "../components/Layout/Footer";

const Root = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

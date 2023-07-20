import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer";

const Root = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;

import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet className="flex-grow " />
      <Footer />
    </div>
  );
};

export default Root;

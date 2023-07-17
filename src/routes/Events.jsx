import { Outlet } from "react-router-dom/dist";
import Navbar from "../components/UI/Navbar";

const Events = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Events;

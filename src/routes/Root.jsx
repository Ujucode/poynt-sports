import { Outlet } from "react-router-dom";

import Navbar from "../components/UI/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;

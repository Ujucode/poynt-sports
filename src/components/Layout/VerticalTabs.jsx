import { Outlet } from "react-router-dom";
import MUIVerticalTabs from "../UI/MUIVerticalTabs";

const VerticalTabs = () => {
  return (
    <section className="my-10">
      <MUIVerticalTabs>
        <Outlet />
      </MUIVerticalTabs>
    </section>
  );
};

export default VerticalTabs;

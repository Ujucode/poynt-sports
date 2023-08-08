import { Link } from "react-router-dom";
import classes from "../Layout/Layout.module.css";

const HeroFooter = () => {
  return (
    <section>
      <div
        className={`${classes["header-container"]} flex justify-evenly text-2xl text-gray-50`}
      >
        <div className=" w-3/12 h-48 flex justify-center align-middle items-center flex-wrap p-8 text-center border-r-2 border-white">
          <p>
            <Link>Events & Tournaments</Link>
          </p>
        </div>
        <div className=" w-3/12 h-48 flex justify-center align-middle items-center flex-wrap p-8 text-center border-r-2 border-white">
          <p>
            <Link>Venue Booking</Link>
          </p>
        </div>
        <div className=" w-3/12 h-48 flex justify-center align-middle items-center flex-wrap p-8 text-center border-r-2 border-white">
          <p>
            <Link>Training Institutes & Clubs</Link>
          </p>
        </div>
        <div className=" w-3/12 h-48 flex justify-center align-middle items-center flex-wrap p-8 text-center ">
          <p>
            <Link>Create your Event</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroFooter;

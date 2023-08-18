import { Link } from "react-router-dom";

const HeroLinks = () => {
  return (
    <section>
      <div
        className={`header-container flex justify-evenly text-2xl text-gray-50`}
      >
        <div className=" w-3/12 h-48 flex justify-center align-middle items-center flex-wrap p-8 text-center border-r-2 border-white">
          <p>
            <Link to="events">Events & Tournaments</Link>
          </p>
        </div>
        <div className=" w-3/12 h-48 flex justify-center align-middle items-center flex-wrap p-8 text-center border-r-2 border-white">
          <p>
            <Link to="venues">Venue Booking</Link>
          </p>
        </div>
        <div className=" w-3/12 h-48 flex justify-center align-middle items-center flex-wrap p-8 text-center border-r-2 border-white">
          <p>
            <Link to="institutes-and-clubs">Training Institutes & Clubs</Link>
          </p>
        </div>
        <div className=" w-3/12 h-48 flex justify-center align-middle items-center flex-wrap p-8 text-center ">
          <p>
            <Link to="/account/create-event">Create your Event</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroLinks;

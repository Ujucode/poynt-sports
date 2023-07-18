import classes from "./Layout.module.css";

const HeroFooter = () => {
  return (
    <section>
      <div
        className={`${classes["header-container"]} flex justify-evenly text-2xl text-gray-50`}
      >
        <div className=" w-3/12 h-48 flex justify-center align-middle items-center flex-wrap p-8 text-center border-r-2 border-white">
          <p>Events & Tournaments</p>
        </div>
        <div className=" w-3/12 h-48 flex justify-center align-middle items-center flex-wrap p-8 text-center border-r-2 border-white">
          <p>Venue Booking</p>
        </div>
        <div className=" w-3/12 h-48 flex justify-center align-middle items-center flex-wrap p-8 text-center border-r-2 border-white">
          <p>Training Institutes & Clubs</p>
        </div>
        <div className=" w-3/12 h-48 flex justify-center align-middle items-center flex-wrap p-8 text-center ">
          <p>Create your Event</p>
        </div>
      </div>
    </section>
  );
};

export default HeroFooter;

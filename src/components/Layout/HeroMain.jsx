import classes from "./Layout.module.css";

const HeroMain = () => {
  return (
    <section>
      <div className={` ${classes["header-container"]} leading-4`}>
        <h1 className="text-9xl">
          Poynt <span className="text-[#00AB55] ">Sports</span>
        </h1>
        <p className="text-5xl my-9">Mark Your Game!</p>
        <button className="text-4xl p-2 rounded-full border-4 border-[#00AB55] mt-6">
          <a href="/" alt="home-button">
            I&#39;m ready!
          </a>
        </button>
      </div>
    </section>
  );
};

export default HeroMain;

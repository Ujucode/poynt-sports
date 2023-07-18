import Button from "../UI/Button";
import classes from "./Layout.module.css";

const HeroMain = () => {
  return (
    <section>
      <div className={` ${classes["header-container"]} leading-4`}>
        <h1 className="text-9xl">
          Poynt <span className="text-[#00AB55] ">Sports</span>
        </h1>
        <p className="text-5xl my-9">Mark Your Game!</p>
        <Button className="text-4xl rounded-full p-2 mt-6 border-4 border-[#00AB55]  ">
          <a href="/" alt="home-button">
            I&#39;m ready!
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroMain;

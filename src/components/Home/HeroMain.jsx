import Button from "../UI/Button";

const HeroMain = () => {
  return (
    <section>
      <div className={` header-container leading-4`}>
        <h1 className="text-9xl">
          Poynt <span className="text-green-400 ">Sports</span>
        </h1>
        <p className="text-5xl my-9">Mark Your Game!</p>
        <Button className="text-3xl rounded-full p-2 mt-6 border-4 border-green-400  ">
          <a href="/" alt="home-button">
            I&#39;m ready!
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroMain;

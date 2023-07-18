import Main from "./Layout/Main";
import Header from "./UI/Header";
import Navbar from "./UI/Navbar";
import HeroMain from "./Layout/HeroMain";
import HeroFooter from "./Layout/HeroFooter";
import classes from "./Layout/Layout.module.css";

const HomePage = () => {
  return (
    <>
      <Header
        className={`h-screen ${classes.hero} bg-no-repeat bg-cover bg-fixed flex flex-col justify-between text-gray-50`}
      >
        <Navbar />
        <HeroMain />
        <HeroFooter />
      </Header>
      <Main />
    </>
  );
};

export default HomePage;

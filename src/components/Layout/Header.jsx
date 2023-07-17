import classes from "./Layout.module.css";
import HeroMain from "./HeroMain";
import HeroFooter from "./HeroFooter";

const Header = () => {
  return (
    <header
      className={`h-screen ${classes.hero} bg-no-repeat bg-cover bg-fixed flex flex-col justify-between text-gray-50`}
    >
      <HeroMain />
      <HeroFooter />
    </header>
  );
};

export default Header;

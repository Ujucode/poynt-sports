import logo from "../../assets/logo.svg";
import classes from "./Layout.module.css";

const Navbar = () => {
  return (
    <header className="h-screen bg-[url('src/assets/hero.svg')] bg-no-repeat bg-cover bg-fixed">
      <nav
        className={`flex justify-between items-center bg-primary text-3xl font-bold pt-4 ${classes["header-container"]} `}
      >
        <div>
          <img src={logo} alt="Company logo" className="" />
        </div>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="/Home" className="text-white-1 hover:text-white-0">
              Home
            </a>
          </li>
          <li>
            <a href="/About" className="text-white-1 hover:text-white-0">
              About
            </a>
          </li>
          <li>
            <a href="/Events" className="text-white-1 hover:text-white-0">
              Events
            </a>
          </li>
          <li>
            <a href="/Contact" className="text-white-1 hover:text-white-0">
              Contact
            </a>
          </li>
        </ul>
        <span className="mr-6">
          <a href="/login" className=" text-white-1 hover:text-white-0">
            Sign In
          </a>
        </span>
      </nav>
    </header>
  );
};

export default Navbar;

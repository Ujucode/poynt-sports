import logo from "../../assets/logo.svg";
import classes from "./Layout.module.css";

const Navbar = () => {
  return (
    <nav
      className={`flex justify-between items-center text-3xl p-4 font-bold ${classes["header-container"]} `}
    >
      <div>
        <img src={logo} alt="Company logo" className="" />
      </div>
      <ul className="w-5/12 flex justify-between ">
        <li>
          <a href="/Home" className="">
            Home
          </a>
        </li>
        <li>
          <a href="/About" className="">
            About
          </a>
        </li>
        <li>
          <a href="/Events" className="">
            Events
          </a>
        </li>
        <li>
          <a href="/Contact" className="">
            Contact
          </a>
        </li>
      </ul>
      <span className="mr-6">
        <a href="/login" className="">
          Sign In
        </a>
      </span>
    </nav>
  );
};

export default Navbar;

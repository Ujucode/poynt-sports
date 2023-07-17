import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import SignUpWrapper from "../Forms/SignUpWrapper";
import classes from "../Layout/Layout.module.css";

const Navbar = () => {
  return (
    <nav
      className={`flex justify-between items-center text-3xl text-gray-50 p-4 font-bold ${classes["header-container"]} bg-transparent`}
    >
      <div>
        <img src={logo} alt="Company logo" className="" />
      </div>
      <ul className="w-5/12 flex justify-around ">
        <li>
          <Link to="/" className="">
            Home
          </Link>
        </li>

        <li>
          <Link to="/Events" className="">
            Events
          </Link>
        </li>
        <li>
          <a href="/Contact" className="">
            Contact
          </a>
        </li>
      </ul>
      <SignUpWrapper />
    </nav>
  );
};

export default Navbar;

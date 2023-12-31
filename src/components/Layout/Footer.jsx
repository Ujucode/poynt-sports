import SocialIcons from "./SocialIcons";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-stone-800 shadow dark:bg-gray-900 ">
      <div className="relative w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="h-7 mr-3" alt="PoyntSports Logo" />
          </a>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="/some/valid/uri"
                className="mr-4 hover:underline md:mr-6 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/some/valid/uri"
                className="mr-4 hover:underline md:mr-6 "
              >
                Licensing
              </a>
            </li>
            <li>
              <a href="/some/valid/uri" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              PoyntSports™
            </a>
            . All Rights Reserved.
          </span>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};
export default Footer;

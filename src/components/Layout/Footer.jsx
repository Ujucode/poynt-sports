import SocialIcons from "./SocialIcons";
const Footer = () => {
  return (
    <footer className="bg-stone-800 rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="relative w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="http://localhost:5173/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src="src/assets/logo.svg"
              className="h-7 mr-3"
              alt="PoyntSports Logo"
            />
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
            <a href="http://localhost:5173/" className="hover:underline">
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

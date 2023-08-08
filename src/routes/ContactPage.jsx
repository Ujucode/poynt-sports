import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Navbar from "../components/Layout/Navbar";
import classes from "../components/Layout/Layout.module.css";

const ContactPage = () => {
  return (
    <>
      <Header className={`bg-gradient-to-r from-green-200 to-green-700`}>
        <Navbar />
      </Header>
      <Main className={`${classes["header-container"]}`}>
        <h1 className="text-green-600 text-6xl text-center">
          This is contact page!
        </h1>
      </Main>
    </>
  );
};

export default ContactPage;

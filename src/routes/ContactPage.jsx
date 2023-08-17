import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Navbar from "../components/Layout/Navbar";

const ContactPage = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main className="header-container">
        <h1 className="text-green-600 text-6xl text-center">
          This is contact page!
        </h1>
      </Main>
    </>
  );
};

export default ContactPage;

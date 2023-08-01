import Header from "../components/UI/Header";
import Main from "../components/UI/Main";
import Navbar from "../components/UI/Navbar";

const ContactPage = () => {
  return (
    <>
      <Header
        className={`bg-gradient-to-r from-green-200 to-green-700  bg-no-repeat bg-cover bg-fixed flex flex-col justify-between text-gray-50`}
      >
        <Navbar />
      </Header>
      <Main className="h-[70vh]">
        <div className="grid place-content-center h-full">
          <h1 className="text-green-600 text-6xl">This is contact page!</h1>
        </div>
      </Main>
    </>
  );
};

export default ContactPage;

import Navbar from "../components/UI/Navbar";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-200 to-green-700">
        <h1 className="text-green-100 text-6xl">Something went wrong!</h1>
      </div>
    </>
  );
};

export default Error;

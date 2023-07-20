import Header from "./UI/Header";
import Navbar from "./UI/Navbar";

const EventsPage = () => {
  return (
    <Header className="bg-gradient-to-r from-green-200 to-green-700 ">
      <Navbar />
      <div className="grid place-content-center h-full">
        <h1 className="text-green-100 text-6xl">This is events page!</h1>
      </div>
    </Header>
  );
};

export default EventsPage;

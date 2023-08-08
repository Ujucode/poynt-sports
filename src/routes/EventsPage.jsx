import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Navbar from "../components/Layout/Navbar";
import classes from "../components/Layout/Layout.module.css";
import EventsGallery from "../components/Events/EventsGallery";

const EventsPage = () => {
  return (
    <>
      <Header className="bg-gradient-to-r from-green-200 to-green-700 ">
        <Navbar />
      </Header>
      <Main className={`${classes["header-container"]} `}>
        <EventsGallery />
      </Main>
    </>
  );
};

export default EventsPage;

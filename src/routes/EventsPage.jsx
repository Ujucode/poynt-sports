import Header from "../components/UI/Header";
import Main from "../components/UI/Main";
import Navbar from "../components/UI/Navbar";
import classes from "../components/Layout/Layout.module.css";
import EventsGallery from "../components/Layout/EventsGallery";

const EventsPage = () => {
  return (
    <>
      <Header className="bg-gradient-to-r from-green-200 to-green-700 ">
        <Navbar />
      </Header>
      <Main className={`${classes["header-container"]}`}>
        <EventsGallery />
      </Main>
    </>
  );
};

export default EventsPage;

import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Navbar from "../components/Layout/Navbar";

import EventsGallery from "../components/Events/EventsGallery";

const EventsPage = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main className="header-container">
        <EventsGallery />
      </Main>
    </>
  );
};

export default EventsPage;

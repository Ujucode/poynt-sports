import { cardData } from "../../data/event-data";
import EventsCard from "../UI/Cards/EventsCard";
import MUIGroupSelect from "../UI/MUIGroupSelect";

const EventsGallery = () => {
  return (
    <section className="my-10">
      <MUIGroupSelect />
      <div className="mt-10">
        {Array.from(Array(3)).map((_, index) => (
          <EventsCard
            key={index}
            title={cardData[index % cardData.length].title}
            description={cardData[index % cardData.length].description}
            image={cardData[index % cardData.length].image}
          />
        ))}
      </div>
    </section>
  );
};

export default EventsGallery;

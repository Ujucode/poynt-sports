import FlowBiteCard from "../UI/Cards/FlowbiteCard";
import MUIPagination from "../UI/MUIPagination";
import MUIGroupSelect from "../UI/MUIGroupSelect";
import { Link } from "react-router-dom";

const AthletesGallery = () => {
  return (
    <section className="my-20 ">
      <MUIGroupSelect profession="Played" />

      <div className="grid grid-cols-3 gap-16">
        {Array.from(Array(15)).map((_, index) => (
          <div key={index}>
            <Link to={`${index}`}>
              <FlowBiteCard />
            </Link>
          </div>
        ))}
      </div>
      <div className="my-10">
        <MUIPagination />
      </div>
    </section>
  );
};

export default AthletesGallery;

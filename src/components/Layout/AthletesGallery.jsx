import FlowBiteCard from "../UI/FlowbiteCard";
import MUIPagination from "../UI/MUIPagination";
import MUISelect from "../UI/MUISelect";

const AthletesGallery = () => {
  return (
    <section className="my-20 ">
      <MUISelect />

      <div className="grid grid-cols-3 gap-16">
        {Array.from(Array(15)).map((_, index) => (
          <div key={index}>
            <FlowBiteCard />
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

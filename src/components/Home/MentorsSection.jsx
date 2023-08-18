import { Link } from "react-router-dom";
import CoachesCard from "../UI/Cards/CoachesCard";
import EastIcon from "@mui/icons-material/East";
import Button from "../UI/Button";

const MentorsSection = () => {
  return (
    <section className="">
      <div className="flex-wrap text-center top-0 py-4">
        <h1 className="mb-10 text-xl font-bold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white-0">
          Mentors
        </h1>
        <p className="mb-2 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here, we shine a spotlight on the brilliant minds behind successful
          teams and athletes. From strategic masterminds to motivational Gurus,
          we bring you the profiles of top-notch coaches who have made a
          significant impact in their respective sports. Get ready to learn from
          the best!
        </p>

        <div className=" grid grid-cols-3 gap-6">
          {Array.from(Array(3)).map((_, index) => (
            <CoachesCard key={index} />
          ))}
        </div>
        <div className="my-5">
          <Link to="/mentors">
            <Button>
              See all
              <span>
                <EastIcon fontSize="small" className="ml-1" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;

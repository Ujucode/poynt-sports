import { Link } from "react-router-dom";
import Button from "../UI/Button";
import EastIcon from "@mui/icons-material/East";
import CoachesCard from "../UI/Cards/CoachesCard";

const TrainingInstitutesAndClubsSection = () => {
  return (
    <section className="">
      <div className="flex-wrap text-center top-0 py-4">
        <h1 className="mb-10 text-xl font-bold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white-0">
          Training Institutes & Clubs
        </h1>
        <p className="mb-2 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          We bring you a comprehensive directory of esteemed institutions and
          clubs from around the world. Discover the training facilities,
          coaching programs, and opportunities they offer to aspiring athletes.
          Whether you’re a beginner or a seasoned player, our listings will
          guide you toward the perfect environment to nurture your sports skills
          and passion.
        </p>

        <div className=" grid grid-cols-3 gap-6">
          {Array.from(Array(3)).map((_, index) => (
            <CoachesCard key={index} />
          ))}
        </div>
        <div className="my-5">
          <Link to="/institutes-and-clubs">
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

export default TrainingInstitutesAndClubsSection;

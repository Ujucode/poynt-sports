import { Link } from "react-router-dom";
import AthleteCard from "../UI/Cards/AthleteCard";
import EastIcon from "@mui/icons-material/East";
import Button from "../UI/Button";

const DUMMY_ATHLETES = [
  { id: 800, name: "Wayne Rooney" },
  { id: 801, name: "Lionel Messi" },
  { id: 802, name: "CR7" },
];

const AthleteSection = () => {
  return (
    <section className="mt-10">
      <div className="flex-wrap text-center top-0 py-4">
        <h1 className="mb-10 text-xl font-bold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white-0">
          Athletes
        </h1>
        <p className="mb-2 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Athletes inspire us with their unwavering passion and commitment to
          their craft. They demonstrate the power of human potential, reminding
          us that with dedication and hard work, anything is possible. Their
          stories of triumph and resilience motivate us to strive for greatness
          in our own lives lorem.
        </p>

        <div className=" grid grid-cols-3 gap-6">
          {DUMMY_ATHLETES.map((athlete) => (
            <Link to={`/athletes/${athlete.id}`} key={athlete.id}>
              <AthleteCard name={athlete.name} />
            </Link>
          ))}
        </div>
        <div className="my-5">
          <Link to="/athletes">
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

export default AthleteSection;

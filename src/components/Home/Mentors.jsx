import AthleteCard from "../UI/Cards/AthleteCard";
// import { Link } from "react-router-dom";

const DUMMY_MENTORS = [
  { id: 500, name: "Mentor 1" },
  { id: 501, name: "Ex Athlete 1" },
  { id: 502, name: "Mentor 2" },
];

const Mentors = () => {
  return (
    <section className="my-16">
      <div className="flex-wrap text-center top-0 py-4">
        <h1 className="mb-10 text-xl font-bold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white-0">
          Mentors & Ex-Athletes
        </h1>
        <p className="mb-2 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Explore the stories of legendary ex-athletes turned mentors. These
          icons of the sporting world have left an indelible mark on their
          respective disciplines. From record-breaking achievements to
          unforgettable moments, we delve into the journeys and experiences of
          these exceptional individuals who have transitioned from athletes to
          inspiring figures in the sports landscape. Get mentorship from the
          ones who have reached where you want to be.
        </p>

        <div className=" grid grid-cols-3 gap-6">
          {DUMMY_MENTORS.map((athlete) => (
            // <Link to={`/athletes/${athlete.id}`} >
            <AthleteCard name={athlete.name} key={athlete.id} />
            // </Link>
          ))}
        </div>
        <div className="my-14">
          <a
            href="/some/link/here"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
          >
            See all
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mentors;

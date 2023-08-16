import AthleteCard from "../UI/Cards/AthleteCard";
// import { Link } from "react-router-dom";        

const DUMMY_Officials= [
  { id: 700, name: "Official A" },
  { id: 701, name: "Official B" },
  { id: 702, name: "Official C" },
];

function SportsOfficial() {
  return (
    <div className="flex-wrap text-center top-0 py-4">
      <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white-0">
        Sports Officials
      </h1>
      <p className="mb-2 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        We highlight the unsung heroes who play crucial roles in maintaining
        fairness, health, and performance in sports. Explore our listings to
        learn about experienced umpires, referees, curators, physiotherapists,
        dieticians, and more. Discover the professionals behind the scenes who
        contribute to the success of athletes and teams.
      </p>

      <div className=" grid grid-cols-3 gap-6">
         
         {DUMMY_Officials.map((athlete) => (
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
        See more
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
  );
}
export default SportsOfficial;

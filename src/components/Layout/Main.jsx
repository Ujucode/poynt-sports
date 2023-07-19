import NewsCard from "../UI/NewsCard";
import AtheleteCard from "./AtheleteCard";
import CoachesCard from "./CoachesCard";
import classes from "./Layout.module.css";

function Main() {
  return (
    <main className={`${classes["header-container"]}`}>
      <section className="my-16">
        <div className="flex-wrap text-center top-0 py-4">
          <h1 className="mb-10 text-xl font-bold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white-0">
            Athletes
          </h1>
          <p className="mb-2 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Athletes inspire us with their unwavering passion and commitment to
            their craft. They demonstrate the power of human potential,
            reminding us that with dedication and hard work, anything is
            possible. Their stories of triumph and resilience motivate us to
            strive for greatness in our own lives lorem.
          </p>

          <div className=" grid grid-cols-3 gap-6">
            <AtheleteCard />
            <AtheleteCard />
            <AtheleteCard />
          </div>
          <div className="my-14">
            <a
              href="/some/link/here"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
            >
              Learn more
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

      <section className="my-16">
        <div className=" text-center">
          <h1 className="mb-10 text-xl font-bold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white-0">
            Coaches
          </h1>
          <p className="mb-2 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            consequuntur minus nemo ratione perspiciatis nostrum, culpa, officia
            earum enim praesentium eum. Ipsum odit iure nemo non accusantium
            autem vero ipsam?
          </p>

          <div className=" grid grid-cols-3 gap-6">
            <CoachesCard />
            <CoachesCard />
            <CoachesCard />
          </div>
          <div className="my-14">
            <a
              href="/some/link/here"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
            >
              Learn more
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

      <section className="my-16">
        <div className=" h-[70vh] mb-1">
          <div className=" text-[40px] text-center py-12 font-bold ">
            Updates and News Letters
          </div>
          <div className="grid grid-cols-3 gap-6">
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
            <NewsCard></NewsCard>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;

import NewsCard from "../UI/NewsCard";
import CoachesCard from "./CoachesCard";
import classes from "./Layout.module.css";

function Main() {
  return (
    <main className={`${classes["header-container"]}`}>
      <section className="h-screen">
        <div className="top-0 flex-wrap py-4 text-center">
          <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white-0">
            Athletes
          </h1>
          <p className="mb-2 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Athletes inspire us with their unwavering passion and commitment to
            their craft. They demonstrate the power of human potential,
            reminding us that with dedication and hard work, anything is
            possible. Their stories of triumph and resilience motivate us to
            strive for greatness in our own lives lorem.
          </p>

          <div className="flex justify-between max-w-screen-xl p-4 mx-auto w-100 md:py-5">
            <a
              href="/some/valid/link"
              className="relative block bg-black group"
            >
              <img
                alt="Athlete"
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
                className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
              />

              <div className="relative p-4 text-left border-x sm:p-6 lg:p-8">
                <p className="text-sm font-medium tracking-widest text-pink-600 uppercase">
                  Football
                </p>

                <p className="text-xl font-bold text-white-0 sm:text-2xl">
                  Tony Wayne
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white-1">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/some/valid/link"
              className="relative block bg-black group"
            >
              <img
                alt="Athlete"
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
                className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
              />

              <div className="relative p-4 text-left sm:p-6 lg:p-8">
                <p className="text-sm font-medium tracking-widest text-pink-600 uppercase">
                  Football
                </p>

                <p className="text-xl font-bold text-white-0 sm:text-2xl">
                  Tony Wayne
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white-1">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/some/valid/link"
              className="relative block bg-black group"
            >
              <img
                alt="Athlete"
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
                className="absolute inset-0 object-cover w-full h-full transition-opacity opacity-75 group-hover:opacity-50"
              />

              <div className="relative p-4 text-left border-x sm:p-6 lg:p-8">
                <p className="text-sm font-medium tracking-widest text-pink-600 uppercase">
                  Football
                </p>
                <p className="text-xl font-bold text-white-0 sm:text-2xl">
                  Tony Wayne
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="transition-all transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white-1">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Omnis perferendis hic asperiores quibusdam quidem
                      voluptates doloremque reiciendis nostrum harum.
                      Repudiandae?
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
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
      </section>

      <sction>
        <div className="top-0 flex-wrap py-4 text-center">
          <h1 className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-800 md:text-4xl lg:text-5xl dark:text-white-0">
            Coaches
          </h1>
          <p className="mb-2 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            consequuntur minus nemo ratione perspiciatis nostrum, culpa, officia
            earum enim praesentium eum. Ipsum odit iure nemo non accusantium
            autem vero ipsam?
          </p>

          <div className="flex justify-between max-w-screen-xl p-4 mx-auto w-100 md:py-5">
            <CoachesCard />
            <CoachesCard />
            <CoachesCard />
          </div>
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
      </sction>

      <section>
        <div className={``}>
          <div className="bg-[#B0CEAF] text-[40px] text-center py-12 font-bold">
            Updates and News Letters
          </div>
          <div className="flex row basis-1/3">
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

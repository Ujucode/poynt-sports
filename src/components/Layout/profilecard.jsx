import ThumbUpIcon from "@mui/icons-material/ThumbUp";
export default function ProfileCard() {
  return (
    <div className="max-w-[1320px] md:py-[80] py-5 flex mx-0 sm:flex-row flex-col group ">
      <div className="basis-[5%] pb-5 "></div>
      <div className="flex flex-col ">
        <div className="text-center font-medium text-sm text-gray-600">
          National level Badminton Athlete
        </div>
        <div className="text-center font-bold text-xl">MINARA PAKIZA ULLAH</div>
        <img
          src="src\assets\athlete.jpg"
          alt="athlete"
          className="w-[500px] ml-40"
        />
        <div className="flex gap-4 ">
          <div className="flex gap-2 pt-4 pl-40 ">
            <a
              href="/some/link/here"
              className="inline-flex items-center justify-center px-8 py-2 text-base font-medium text-center bg-green-700 rounded-lg hover:bg-green-800"
            >
              Support <ThumbUpIcon className="ml-2" />
            </a>
          </div>
          <div className="flex pt-5 text-xl font-semi-bold">7 Supporters</div>
        </div>
        <div className="pt-3 text-center">
          <a
            href="/some/link/here"
            className="inline-flex items-center justify-center px-12 py-2 text-base font-medium text-center bg-green-700 rounded-lg hover:bg-green-800"
          >
            SPONSER{" "}
          </a>
        </div>
        <div className="font-bold text-2xl text-center mt-3 mb-2">
          Fan Hits: 230
        </div>

        <div className="mt-10 bg-stone-100 m-2 ">
          <h1 className="text-center font-bold text-xl pt-4">About Me</h1>
          <p className="text-left font-medium flex flex-row pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            libero earum eveniet enim. Officia eum tempore modi vero tempora
            mollitia nemo. Dolor ratione totam soluta dicta dolores corrupti
            nisi assumenda. Lorem ipsum dolor sit amet consecteturadipisicing
            elit. Impedit itaque quas odio exercitation ate tempora, sit
            praesentium autem omnis ipsum! Quis nesciunt commodi quae in modi
            voluptatum neque. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Recusandae rem sapiente aperiam nulla est maiores accusamus
            assumenda qui quod quas consequuntur voluptate exercitationem
            kjvbkjdsnvjnndnsdn
          </p>
        </div>
      </div>
      <div className="basis-[95%] text-left pt-10 ">
        <h1 className="text-2xl pb-2 "> Badminton</h1>
        <p className="py-2">GENDER: FEMALE</p>
        <p className="py-2">DATE OF BIRTH: FEBRUARY 10, 2003</p>
        <p className="py-2">WEIGHT: 57 (KG)</p>
        <p className="py-2">HEIGHT: 165 (CM)</p>
        <p className="py-2 pb-4">ADDRESS: KAMRUP(M), ASSAM, INDIA</p>
        <h1 className="text-2xl pb-2"> PLAYING CAREER</h1>
        <p className="py-2">PLAYING FROM: (YEAR) 2010</p>
        <p className="py-2 pb-4">PLAYING UPTO: NATIONAL (LEVEL)</p>
        <h1 className="text-2xl pb-5"> CURRENTLY PLAYING FOR:</h1>
        <table className="table-auto border-collapse border border-slate-400 pb-2 ">
          <thead>
            <tr>
              <th className="py-2 px-2 border border-slate-300 ">Team/Club</th>
              <th className="px-2 border border-slate-300 ">PLAYING FROM:</th>
              <th className="px-2 border border-slate-300 ">LOCATED IN: </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 border border-slate-400">GUWAHATI TEAM</td>
              <td className="border border-slate-400">JANUARY 2022</td>
              <td className="border border-slate-400">
                GUWAHATI,KAMRUP(M),ASSAM
              </td>
            </tr>
            <tr>
              <td className="py-2 px-2 border border-slate-400">
                KHANAPARA SPORTS AND CULTURAL ORGANISATION
              </td>
              <td className=" border border-slate-400">JANUARY 2020</td>
              <td className=" border border-slate-400">
                GUWAHATI,KAMRUP(M),ASSAM
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col">
          {" "}
          <img
            src="src\assets\athlete1.jpg"
            alt="profile1"
            className="w-50 p-2 mt-2"
          />{" "}
        </div>
      </div>
    </div>
  );
}

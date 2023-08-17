function Education() {
  return (
    <div className="p-20 md:p-10 lg:p-5 drop-shadow-2xl bg-gray-200 grid grid-cols-2 md:grid-cols-1 gap-8">
      <div className="grid grid-cols-1 text-center md:pr-2 gap-8 md:grid-cols-2 ">
        <div className="border-separate border-spacing-2 border border-slate-400 md:border-0 md:border-r md:pr-2">
          <table className="w-full ">
            <thead>
              <tr>
                <th className="border border-slate-300 md:text-center">Education Qualification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-3 md:p-2">
                  INSTITUTE: SSA DISPUR
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 md:p-2">
                  FROM: MAY 1, 2020 TO: APRIL 30, 2022
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 md:p-2">
                  DEGREE: 12+ SUBJECT: SCIENCE GRADE: 77%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="border-separate border-spacing-2 border border-slate-400 md:border-0 md:border-r md:pr-2">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border border-slate-300 md:text-center ">Previously Played For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-3 md:p-2">ASSAM TEAM</td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 md:p-2">
                  PLAYED FROM: JANUARY, 2014 TO: JANUARY, 2016
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-3 md:p-2">
                  LOCATED IN: KAMRUP, ASSAM, INDIA
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-span-2 md:col-span-1 p-4 bg-white-1">
  <div className=" md:text-center text-2xl font-bold pt-6 md:pr-2 flex items-center justify-center">
    Participations
  </div>
  <div className=" md:text-center text-lg font-medium pt-4 md:pr-2 flex items-center justify-center">
    No data found
  </div>
  <div className=" md:text-center text-2xl font-bold pt-6 md:pr-2 flex items-center justify-center">
    Other Informations
  </div>
  <div className=" md:text-center text-lg font-medium pt-4 md:pr-2 flex items-center justify-center">
    No data found
  </div>
</div>


    </div>
  );
}

export default Education;

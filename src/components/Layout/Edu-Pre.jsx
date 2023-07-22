function Education() {
  return (
    <div className="p-10 drop-shadow-2xl bg-gray-200 flex flex-col">
      <table className="border-separate border-spacing-2 border border-slate-400 ">
        <thead>
          <tr>
            <th className="border border-slate-300">Education Qualification</th>
            <th className="border border-slate-300">Previously Played For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 ...">
              INSTITUTE: SSA DISPUR
            </td>
            <td className="border border-slate-300 ...">ASSAM TEAM TEAM</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">
              FROM: MAY 1, 2020 TO: APRIL 30, 2022
            </td>
            <td className="border border-slate-300 ...">
              PLAYED FROM: JANUARY, 2014 TO: JANUARY, 2016
            </td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">
              DEGREE: 12+ SUBJECT: SCIENCE GRADE: 77%
            </td>
            <td className="border border-slate-300 ...">
              LOCATED IN: KAMRUP, ASSAM, INDIA
            </td>
          </tr>
        </tbody>
      </table>

      <div className="text-center text-2xl font-bold pt-6 bg-white-1">
        Participations
        <div className="text-center text-lg font-medium pt-4 ">
          {" "}
          No data found{" "}
        </div>
        <div className="text-center text-2xl font-bold pt-6">
          Other Informations{" "}
        </div>
        <div className="text-center text-lg font-medium pt-4 ">
          {" "}
          No data found{" "}
        </div>
      </div>
    </div>
  );
}

export default Education;

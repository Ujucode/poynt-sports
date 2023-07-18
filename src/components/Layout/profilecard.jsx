export default function ProfileCard() {
    return (
        <div className="max-w-[1320px] md:py-[80] py-5 flex mx-0 sm:flex-row flex-col group ">
            
        <div className="basis-[5%] pb-5"></div>
        <div className="flex flex-col">  
            <img src="src\assets\athlete.jpg" alt="athlete" className="w-[700px]"/> 
            <div className="flex gap-4 ">
                <div className="flex gap-2"><span>support</span><span>icon</span></div> 
                <div>hit</div>
            </div> 
            <div>sponser</div>
        </div>
        {/* make them dynamic and use icons from react icons */}
       
        <div className="basis-[95%] text-center">
            <h1 className="text-2xl pb-2"> Badminton</h1>
            <p className="py-2">GENDER: FEMALE</p>
            <p className="py-2">DATE OF BIRTH: FEBRUARY 10, 2003</p>
            <p className="py-2">WEIGHT: 57 (KG)</p>
            <p className="py-2">HEIGHT: 165 (CM)</p>
            <p className="py-2 pb-4">ADDRESS: KAMRUP(M), ASSAM, INDIA</p>
            <h1 className="text-2xl pb-2"> PLAYING CAREER</h1>
            <p className="py-2">PLAYING FROM: (YEAR) 2010</p>
            <p className="py-2 pb-4">PLAYING UPTO: NATIONAL (LEVEL)</p>
            <h1 className="text-2xl pb-2"> CURRENTLY PLAYING FOR:</h1>
            <table className="ml-12 table-auto border-collapse border border-slate-400">
                <thead>
                <tr>
      <th className="border border-slate-300 ">Team/Club</th>
      <th className="border border-slate-300 ">PLAYING FROM:</th>
      <th className="border border-slate-300 ">LOCATED IN: </th>      
    </tr>
                </thead>
  <tbody>
    <tr>
      <td className=" border border-slate-400" >GUWAHATI TEAM</td>
      <td className="border border-slate-400">JANUARY 2022</td>
      <td className="border border-slate-400">GUWAHATI,KAMRUP(M),ASSAM</td>
    </tr>
    <tr>
      <td className=" border border-slate-400">KHANAPARA SPORTS AND CULTURAL ORGANISATION</td>
      <td className=" border border-slate-400">PLAYING FROM: JANUARY 2020</td>
      <td className=" border border-slate-400">LOCATED IN: GUWAHATI,KAMRUP(M),ASSAM</td>
    </tr>
  </tbody>
</table>
        </div> 
        </div>

    )
}

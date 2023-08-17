import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import athlete from "../../../assets/athlete.jpg";
import athlete_1 from "../../../assets/athlete1.jpg";

function ProfileCard() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} lg={5} >
        <Typography variant="body1" align="center" color="textSecondary" className="md:text-left font-medium ">
          National level Badminton Athlete
        </Typography>
        <Typography variant="h4" align="center" className="md:text-left font-bold text-xl">
          MINARA PAKIZA ULLAH
        </Typography>
        <div className=""> {/* Center the image */}
        <img src={athlete} alt="athlete" className="w-full md:w-auto max-w-[300px] mx-auto" />
      </div>
        <div className="flex items-center justify-center md:flex md:justify-start space-x-2 pt-4 md:mt-0">
          <a
            href="/some/link/here"
            className="inline-flex items-center justify-center px-8 py-2 text-base font-medium text-center bg-green-700 rounded-lg hover:bg-green-800"
          >
            Support <ThumbUpIcon className="ml-2 " />
          </a>
          <div className="text-center md:flex items-center text-xl font-semibold md:ml-4">7 Supporters</div>
        </div>
         <div className="flex items-center justify-center md:flex md:justify-start space-x-2 pt-4 md:mt-0">
          <a
            href="/some/link/here"
            className="inline-flex items-center justify-center px-8 py-2 text-base font-medium text-center bg-green-700 rounded-lg hover:bg-green-800"
          >
            SPONSER{" "}
          </a>
        </div>
        <Typography variant="h5" align="center" className="font-bold mt-5 mb-2 md:text-left">
          Fan Hits: 230
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={7}>
        <div className="basis-[95%] text-center pt-10 md:text-left">
          <Typography variant="h5" className="pb-2">Badminton</Typography>
          <Typography variant="body1" className="py-2">GENDER: FEMALE</Typography>
          <Typography variant="body1" className="py-2">DATE OF BIRTH: FEBRUARY 10, 2003</Typography>
          <Typography variant="body1" className="py-2">WEIGHT: 57 (KG)</Typography>
          <Typography variant="body1" className="py-2">HEIGHT: 165 (CM)</Typography>
          <Typography variant="body1" className="py-2 pb-4">ADDRESS: KAMRUP(M), ASSAM, INDIA</Typography>
          <Typography variant="h5" className="pb-2">PLAYING CAREER</Typography>
          <Typography variant="body1" className="py-2">PLAYING FROM: (YEAR) 2010</Typography>
          <Typography variant="body1" className="py-2 pb-4">PLAYING UPTO: NATIONAL (LEVEL)</Typography>
          <Typography variant="h5" className="pb-5">CURRENTLY PLAYING FOR:</Typography>
          <div className="flex items-center justify-center md:flex md:justify-start space-x-2 pt-4 md:mt-0">
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
          </div>
        </div>
      </Grid>
      <Grid item xs={5} sm={8} md={12}>
        
      <div className="mt-10 bg-stone-100 m-2 p-4 ">
    <Typography variant="h4" align="center" className="font-bold">
      About Me
    </Typography>
    <div className="md:flex md:flex-row-reverse">
      <Typography
        variant="body1"
        align="left"
        className="font-medium pt-4 md:pr-6"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia libero earum eveniet enim. Officia eum tempore modi vero tempora mollitia nemo. Dolor ratione totam soluta dicta dolores corrupti nisi assumenda. Lorem ipsum dolor sit amet consecteturadipisicing elit. Impedit itaque quas odio exercitation ate tempora, sit praesentium autem omnis ipsum! Quis nesciunt commodi quae in modi voluptatum neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae rem sapiente aperiam nulla est maiores accusamus assumenda qui quod quas consequuntur voluptate exercitationem kjvbkjdsnvjnndnsdn
      </Typography>
      <img src={athlete_1} alt="profile1" className="w-[200px] p-2 mt-2 md:w-[200px] md:mb-0 md:ml-4" />
    </div>
  </div>
  </Grid>
    </Grid>
  );
}

export default ProfileCard;

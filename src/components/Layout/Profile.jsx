import AchieveTable from "./AchievementTable";
import ProfileCard from "./profilecard";
import Education from "./Edu-Pre";
import Navbar from "../UI/Navbar"

function Profile() {
  return (
    <profilepage>
         <Navbar/>
         <ProfileCard/>
        <AchieveTable/>
        <Education/>        
    </profilepage>
  );
}

export default Profile;

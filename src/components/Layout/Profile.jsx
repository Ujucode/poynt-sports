import AchieveTable from "./AchievementTable";
import Navbar from "./Navbar";
import ProfileCard from "./profilecard";
import Education from "./Edu-Pre";

function Profile() {
  return (
    <profilepage>
         <Navbar/>
         <ProfileCard/>
        <AchieveTable/>
        <Education/>        
    </profilepage>
  )
}

export default Profile

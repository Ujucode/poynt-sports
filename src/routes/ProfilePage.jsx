import AchievementTable from "../components/Profile/AchievementTable";

import Education from "../components/Profile/Education";
import Navbar from "../components/Layout/Navbar";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import ProfileCard from "../components/UI/Cards/ProfileCard";

function ProfilePage() {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main className={``}>
        <ProfileCard />
        <AchievementTable />
        <Education />
      </Main>
    </>
  );
}

export default ProfilePage;

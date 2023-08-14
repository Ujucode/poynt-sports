import AchievementTable from "../components/Profile/AchievementTable";
import classes from "../components/Layout/Layout.module.css";
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
      <Main className={`${classes["header-container"]}`}>
        <ProfileCard />
        <AchievementTable />
        <Education />
      </Main>
    </>
  );
}

export default ProfilePage;

import AchievementTable from "../components/Layout/AchievementTable";
import classes from "../components/Layout/Layout.module.css";
import Education from "../components/Layout/Edu-Pre";
import Navbar from "../components/UI/Navbar";
import Header from "../components/UI/Header";
import Main from "../components/UI/Main";
import ProfileCard from "../components/Layout/ProfileCard";

function ProfilePage() {
  return (
    <>
      <Header
        className={`bg-gradient-to-r from-green-200 to-green-700  bg-no-repeat bg-cover bg-fixed flex flex-col justify-between text-gray-50`}
      >
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

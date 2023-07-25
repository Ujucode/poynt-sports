import AchievementTable from "./Layout/AchievementTable";
import classes from "./Layout/Layout.module.css";
import Education from "./Layout/Edu-Pre";
import Navbar from "./UI/Navbar";
import Header from "./UI/Header";
import Main from "./UI/Main";
import ProfileCard from "./Layout/ProfileCard";

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

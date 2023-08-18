import AchievementTable from "../components/Profile/AchievementTable";
import Education from "../components/Profile/Education";
import Main from "../components/Layout/Main";
import ProfileCard from "../components/UI/Cards/ProfileCard";

function ProfilePage() {
  return (
    <Main className={``}>
      <ProfileCard />
      <AchievementTable />
      <Education />
    </Main>
  );
}

export default ProfilePage;

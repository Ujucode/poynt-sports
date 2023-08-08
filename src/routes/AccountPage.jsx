import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Navbar from "../components/Layout/Navbar";
import classes from "../components/Layout/Layout.module.css";
import VerticalTabs from "../components/Account/VerticalTabs";

const AccountPage = () => {
  return (
    <>
      <Header className={`bg-gradient-to-r from-green-200 to-green-700`}>
        <Navbar />
      </Header>
      <Main className={`${classes["header-container"]} `}>
        <VerticalTabs />
      </Main>
    </>
  );
};

export default AccountPage;

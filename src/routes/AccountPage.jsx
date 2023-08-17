import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";
import Navbar from "../components/Layout/Navbar";
import VerticalTabs from "../components/Account/VerticalTabs";

const AccountPage = () => {
  return (
    <>
      <Header className={``}>
        <Navbar />
      </Header>
      <Main className="">
        <VerticalTabs />
      </Main>
    </>
  );
};

export default AccountPage;

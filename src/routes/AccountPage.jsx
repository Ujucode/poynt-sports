import AccountSettings from "../components/Layout/AccountSettings";
import Header from "../components/UI/Header";
import Main from "../components/UI/Main";
import Navbar from "../components/UI/Navbar";
import classes from "../components/Layout/Layout.module.css";

const AccountPage = () => {
  return (
    <>
      <Header
        className={`bg-gradient-to-r from-green-200 to-green-700  bg-no-repeat bg-cover bg-fixed flex flex-col 
        justify-between text-gray-50`}
      >
        <Navbar />
      </Header>
      <Main className={`${classes["header-container"]}`}>
        <AccountSettings />
      </Main>
    </>
  );
};

export default AccountPage;

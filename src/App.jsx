import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Error from "./routes/Error";
import HomePage from "./routes/HomePage";
import EventsPage from "./routes/EventsPage";
import ContactPage from "./routes/ContactPage";
import AthletesPage from "./routes/AthletesPage";
import ProfilePage from "./routes/ProfilePage";
import AccountPage from "./routes/AccountPage";
import UserProfile from "./components/Account/UserProfile";
import AddSkillsTab from "./components/Account/AddSkillsTab";
import Supports from "./components/Account/Supports";
import CreateEvent from "./components/Account/CreateEvent";
import EventDetail from "./components/Account/EventDetail";
import EventsAttended from "./components/Account/EventsAttended";
import CalenderTab from "./components/Account/CalenderTab";
import PostsTab from "./components/Account/PostsTab";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventsPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "athletes",
          children: [
            { index: true, element: <AthletesPage /> },
            { path: ":athleteId", element: <ProfilePage /> },
          ],
        },
        {
          path: "account",
          element: <AccountPage />,
          children: [
            { index: true, element: <UserProfile /> },
            { path: "add-skills", element: <AddSkillsTab /> },
            { path: "supports", element: <Supports /> },
            { path: "create-event", element: <CreateEvent /> },
            { path: "event-details", element: <EventDetail /> },
            { path: "events-attended", element: <EventsAttended /> },
            { path: "calender", element: <CalenderTab /> },
            { path: "posts", element: <PostsTab /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

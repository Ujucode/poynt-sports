import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Error from "./routes/Error";
import HomePage from "./routes/HomePage";
import EventsPage from "./routes/EventsPage";
import ContactPage from "./routes/ContactPage";
import AthletesPage from "./routes/AthletesPage";
import ProfilePage from "./routes/ProfilePage";
import AccountPage from "./routes/AccountPage";
import UserProfileTab from "./components/Account/UserProfileTab";
import AddSkillsTab from "./components/Account/AddSkillsTab";
import SupportsTab from "./components/Account/SupportsTab";
import CreateEventTab from "./components/Account/CreateEventTab";
import EventDetailTab from "./components/Account/EventDetailTab";
import EventsAttendedTab from "./components/Account/EventsAttendedTab";
import CalenderTab from "./components/Account/CalenderTab";
import PostsTab from "./components/Account/PostsTab";
import PlayingCareerTab from "./components/Account/PlayingCareerTab";
import EducationTab from "./components/Account/EducationTab";
import NewsAndUpdatesPage from "./routes/NewsAndUpdatesPage";

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
            { index: true, element: <UserProfileTab /> },
            { path: "add-skills", element: <AddSkillsTab /> },
            { path: "supports", element: <SupportsTab /> },
            { path: "create-event", element: <CreateEventTab /> },
            { path: "event-details", element: <EventDetailTab /> },
            { path: "events-attended", element: <EventsAttendedTab /> },
            { path: "calender", element: <CalenderTab /> },
            { path: "playing-career", element: <PlayingCareerTab /> },
            { path: "education", element: <EducationTab /> },
            { path: "posts", element: <PostsTab /> },
          ],
        },
        {
          path: "news-and-updates",
          element: <NewsAndUpdatesPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

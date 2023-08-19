import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Error from "./routes/Error";
import HomePage from "./routes/HomePage";
import VenuePage from "./routes/VenuePage";
import EventsPage from "./routes/EventsPage";
import ContactPage from "./routes/ContactPage";
import CoachesPage from "./routes/CoachesPage";
import ProfilePage from "./routes/ProfilePage";
import AccountPage from "./routes/AccountPage";
import MentorsPage from "./routes/MentorsPage";
import AthletesPage from "./routes/AthletesPage";
import OfficialsPage from "./routes/OfficialsPage";
import EventsDetailPage from "./routes/EventsDetailPage";
import NewsAndUpdatesPage from "./routes/NewsAndUpdatesPage";
import TrainingInstitutesAndClubsPage from "./routes/TrainingInstitutesAndClubsPage";

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

import AchieveCertificate from "./components/Account/AchieveCertificate";
import Participation from "./components/Account/Participation";
import BankAccount from "./components/Account/BankAccount";
import Sponsorship from "./components/Account/Sponsorship";

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
          children: [
            { index: true, element: <EventsPage /> },
            { path: ":eventsId", element: <EventsDetailPage /> },
          ],
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
          path: "coaches",
          children: [
            { index: true, element: <CoachesPage /> },
            { path: ":coachId", element: <ProfilePage /> },
          ],
        },
        {
          path: "mentors",
          children: [
            { index: true, element: <MentorsPage /> },
            { path: ":mentorId", element: <ProfilePage /> },
          ],
        },
        {
          path: "institutes-and-clubs",
          children: [
            { index: true, element: <TrainingInstitutesAndClubsPage /> },
            { path: ":clubsId", element: <ProfilePage /> },
          ],
        },
        {
          path: "officials",
          children: [
            { index: true, element: <OfficialsPage /> },
            { path: ":officialId", element: <ProfilePage /> },
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
            {
              path: "achievements-and-certificates",
              element: <AchieveCertificate />,
            },
            { path: "participations", element: <Participation /> },
            { path: "bank-account", element: <BankAccount /> },
            { path: "sponsorship", element: <Sponsorship /> },
          ],
        },
        {
          path: "news-and-updates",
          element: <NewsAndUpdatesPage />,
        },
        {
          path: "venues",
          element: <VenuePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

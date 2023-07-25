import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Error from "./routes/Error";
import HomePage from "./routes/HomePage";
import EventsPage from "./routes/EventsPage";
import ContactPage from "./routes/ContactPage";
import AthletesPage from "./routes/AthletesPage";
import ProfilePage from "./routes/ProfilePage";
import AccountPage from "./routes/AccountPage";

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
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

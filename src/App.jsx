import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Error from "./routes/Error";
import HomePage from "./components/HomePage";
import EventsPage from "./components/EventsPage";
import ContactPage from "./components/ContactPage";
import AthletesPage from "./components/AthletesPage";

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
          element: <AthletesPage />,
          children: [],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Spinach from "./Spinach";
import Popeye from "./Popeye";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
  {
    path: "spinach",
    element: <Spinach />,
  },
  {
    path: "popeye",
    element: <Popeye />,
  },
];

export default routes;

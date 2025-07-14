import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Africa from "../Pages/Africa";
import America from "../Pages/America";
import AsiaPacific from "../Pages/AsiaPacific";
import Europe from "../Pages/Europe";
import Country from "../Pages/Country";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "africa",
        element: <Africa />,
      },
      {
        path: "america",
        element: <America />,
      },
      {
        path: "asiapacific",
        element: <AsiaPacific />,
      },
      {
        path: "europe",
        element: <Europe />,
      },
      {
        path: "country",
        element: <Country />,
      },
    ],
  },
]);

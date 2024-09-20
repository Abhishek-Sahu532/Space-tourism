import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import { Home } from "../Pages/Home";
import { Layout } from "../layout";
import Destination from "../Pages/Destination";
import Crew from "../Pages/Crew";

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <div>Oops</div>,
    children: [
      {
        path: "/",
        element: (
          <Layout>
            <Outlet />
          </Layout>
        ),
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/destination",
            element: <Destination />,
          },
          {
            path: "/crew",
            element: <Crew />,
          },
        ],
      },
    ],
  },
]);

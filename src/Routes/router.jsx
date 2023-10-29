import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ContentPage from "../Pages/ContentPage/ContentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/home",
        index: true,
        element: <ContentPage />,
      },
    ],
  },
]);

export default router;

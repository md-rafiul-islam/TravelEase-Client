import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home";
import AllVehicles from "../page/AllVehicles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/all-vehicles",
        loader: () => fetch("http://localhost:3000/all-vehicles"),
        element: <AllVehicles></AllVehicles>,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home";
import AllVehicles from "../page/AllVehicles";
import Login from "../page/Login";
import Register from "../page/Register";
import AddVehicle from "../page/AddVehicle";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/latest-vehicles"),
        element: <Home></Home>,
      },
      {
        path: "/all-vehicles",
        loader: () => fetch("http://localhost:3000/all-vehicles"),
        element: <AllVehicles></AllVehicles>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-vehicle",
        element: (
          <PrivateRoute>
            <AddVehicle></AddVehicle>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

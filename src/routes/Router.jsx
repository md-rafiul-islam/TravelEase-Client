import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home";
import AllVehicles from "../page/AllVehicles";
import Login from "../page/Login";
import Register from "../page/Register";
import AddVehicle from "../page/AddVehicle";
import PrivateRoute from "./PrivateRoute";
import VehicleDetails from "../page/VehicleDetails";
import MyVehicle from "../page/MyVehicle";
import UpdateVehicle from "../page/UpdateVehicle";
import MyBookings from "../page/MyBookings";
import MyLoader from "../components/MyLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/latest-vehicles"),
        element: <Home></Home>,
        hydrateFallbackElement: (
          <div className="flex items-center justify-center min-h-[50vh]">
            <MyLoader></MyLoader>
          </div>
        ),
      },
      {
        path: "/all-vehicles",
        loader: () => fetch("http://localhost:3000/all-vehicles"),
        element: <AllVehicles></AllVehicles>,
        hydrateFallbackElement: (
          <div className="flex items-center justify-center min-h-[50vh]">
            <MyLoader></MyLoader>
          </div>
        ),
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
      {
        path: "/vehicle-details/:id",
        element: (
          <PrivateRoute>
            <VehicleDetails></VehicleDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/vehicles/${params.id}`),
        hydrateFallbackElement: (
          <div className="flex items-center justify-center min-h-[50vh]">
            <MyLoader></MyLoader>
          </div>
        ),
      },
      {
        path: "/my-vehicles",
        element: (
          <PrivateRoute>
            <MyVehicle></MyVehicle>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-vehicles/:id",
        element: (
          <PrivateRoute>
            <UpdateVehicle></UpdateVehicle>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/vehicles/${params.id}`),
        hydrateFallbackElement: (
          <div className="flex items-center justify-center min-h-[50vh]">
            <MyLoader></MyLoader>
          </div>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

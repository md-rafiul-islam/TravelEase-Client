import React, { use } from "react";
import { Authcontext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import MyLoader from "../components/MyLoader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(Authcontext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <MyLoader></MyLoader>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;

import React from "react";
import { ClimbingBoxLoader, PropagateLoader } from "react-spinners";

const MyLoader = () => {
  return (
    <div className="h-full">
      <PropagateLoader></PropagateLoader>
    </div>
  );
};

export default MyLoader;

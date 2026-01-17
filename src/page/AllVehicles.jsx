import React from "react";
import { useLoaderData } from "react-router";

const AllVehicles = () => {
  const vehiclesData = useLoaderData();
  console.log(vehiclesData);
  return (
    <div>
      <p>we will see all vehicles here</p>
    </div>
  );
};

export default AllVehicles;

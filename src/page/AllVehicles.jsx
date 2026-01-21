import React from "react";
import { useLoaderData } from "react-router";
import Card from "../components/Card";

const AllVehicles = () => {
  const vehiclesData = useLoaderData();
  console.log(vehiclesData);
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          All Vehicles
        </h1>
        <p className="mt-2 text-gray-600">
          Choose from a wide range of vehicles available for rent
        </p>
      </section>
      
      <section className="max-w-11/12 mx-auto gap-3 grid sm:grid-cols-2 lg:grid-cols-3">
        {vehiclesData.map((vehicle) => (
          <Card key={vehicle._id} vehicle={vehicle}></Card>
        ))}
      </section>
    </div>
  );
};

export default AllVehicles;

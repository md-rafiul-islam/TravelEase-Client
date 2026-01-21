import React from "react";
import Card from "./Card";

const LatestVehicles = ({ vehicles }) => {
  // console.log(vehicles);
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Latest Vehicles
        </h2>
        <p className="mt-3 text-gray-600">
          Explore the newest vehicles available for rent
        </p>
      </div>

      {/* grid view  */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {vehicles.map((vehicle) => (
          <Card key={vehicle._id} vehicle={vehicle}></Card>
        ))}
      </div>
    </section>
  );
};

export default LatestVehicles;

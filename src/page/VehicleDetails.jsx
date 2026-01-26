import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import { Authcontext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";

const VehicleDetails = () => {
  const data = useLoaderData();
  const [vehicle, setVehicle] = useState(data.data);
  const instanceSecure = useAxiosSecure();
  // const vehicle = ;
  const { user } = use(Authcontext);

  const handleBookingStatus = () => {
    const updatedVehicle = {
      availability: "Booked",
    };
    // changing availability
    instanceSecure
      .patch(
        `https://travel-ease-server-mu.vercel.app/update-vehicles/${vehicle._id}`,
        updatedVehicle,
      )
      .then((data) => console.log(data));

    const newData = {
      ...vehicle,
      availability: "Booked",
    };
    setVehicle(newData);

    // adding to booked list
    instanceSecure
      .post(`/book-vehicle?email=${user.email}`, vehicle)
      .then((data) => console.log(data));
  };

  if (!vehicle) {
    return (
      <div className="text-center text-red-500 mt-20">Vehicle not found ❌</div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <title>TravelEase-Vehicle Details</title>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Vehicle Image */}
        <div>
          <img
            src={vehicle.coverImage}
            alt={vehicle.vehicleName}
            className="w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        {/* Vehicle Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{vehicle.vehicleName}</h1>

          <p className="text-gray-600">{vehicle.description}</p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {vehicle.category}
            </p>

            <p>
              <span className="font-semibold">Fuel:</span> {vehicle.categories}
            </p>

            <p>
              <span className="font-semibold">Location:</span>{" "}
              {vehicle.location}
            </p>

            <p>
              <span className="font-semibold">Owner:</span> {vehicle.owner}
            </p>

            <p>
              <span className="font-semibold">Price:</span> ৳
              {vehicle.pricePerDay}/day
            </p>

            <p>
              <span className="font-semibold">Availability:</span>{" "}
              <span
                className={`font-medium ${
                  vehicle.availability === "Available"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {vehicle.availability}
              </span>
            </p>
          </div>

          {vehicle.availability == "Available" ? (
            <button
              onClick={handleBookingStatus}
              className="mt-6 px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent/90 transition"
            >
              Book Now
            </button>
          ) : (
            <button
              disabled
              className="mt-6 px-6 py-3 rounded-xl bg-amber-800 text-white font-medium"
            >
              Booked
            </button>
          )}
          {/* Action Button */}
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;

import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../provider/AuthProvider";
import { Link } from "react-router";

const MyVehicle = () => {
  const { user } = useContext(Authcontext);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-vehicles?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data);
      });
  }, [user]);

  if (vehicles.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold">
          You haven’t added any vehicle yet 🚗
        </h2>
        <Link
          to="/add-vehicle"
          className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-xl"
        >
          Add Vehicle
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">
        My Vehicles ({vehicles.length})
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle._id}
            className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={vehicle.coverImage}
              alt={vehicle.vehicleName}
              className="h-48 w-full object-cover"
            />

            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold">{vehicle.vehicleName}</h3>

              <p className="text-sm text-gray-500">{vehicle.location}</p>

              <p className="font-medium">৳{vehicle.pricePerDay}/day</p>

              <p
                className={`text-sm font-medium ${
                  vehicle.availability === "Available"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {vehicle.availability}
              </p>

              {/* Actions */}
              <div className="flex gap-3 mt-4">
                <Link
                  to={`/vehicle-details/${vehicle._id}`}
                  className="flex-1 text-center py-2 rounded-lg bg-primary text-white text-sm"
                >
                  View
                </Link>

                <button className="flex-1 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-100">
                  Update
                </button>

                <button className="flex-1 py-2 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVehicle;

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

  const removeVehicle = (id) => {
    fetch(`http://localhost:3000/vehicles/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const newData = vehicles.filter((vehicle) => vehicle._id != id);
        setVehicles(newData);
      });
  };

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

      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 gap-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle._id}
              className="flex items-center gap-4 border rounded-xl p-3 bg-white shadow-sm hover:shadow-md transition"
            >
              {/* Left: Image */}
              <img
                src={vehicle.coverImage}
                alt={vehicle.vehicleName}
                className="w-24 h-20 rounded-lg object-cover flex-shrink-0"
              />

              {/* Middle: Content */}
              <div className="flex-1 space-y-0.5">
                <h3 className="text-base font-semibold">
                  {vehicle.vehicleName}
                </h3>

                <p className="text-xs text-gray-500">{vehicle.location}</p>

                <p className="text-sm font-medium">
                  ৳{vehicle.pricePerDay}/day
                </p>

                <p
                  className={`text-xs font-medium ${
                    vehicle.availability === "Available"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {vehicle.availability}
                </p>
              </div>

              {/* action buttons: update and delete */}
              <div className="flex flex-col gap-2 items-end">
                <Link
                  to={`/update-vehicles/${vehicle._id}`}
                  className="px-3 py-1 w-20 text-center text-xs rounded-md border hover:bg-gray-100 transition"
                >
                  Update
                </Link>

                <button
                  onClick={() => removeVehicle(vehicle._id)}
                  className="px-3 py-1 w-20 text-center text-xs rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyVehicle;

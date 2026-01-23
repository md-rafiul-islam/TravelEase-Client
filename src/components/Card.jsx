import React from "react";
import { Link } from "react-router";

const Card = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={vehicle.coverImage}
          alt={vehicle.vehicleName}
          className="h-52 w-full object-cover"
        />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
          {vehicle.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">
            {vehicle.vehicleName}
          </h3>

          <span
            className={`text-sm font-medium px-3 py-1 rounded-full ${
              vehicle.availability === "Available"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {vehicle.availability}
          </span>
        </div>

        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
          {vehicle.description}
        </p>

        {/* Location */}
        <p className="text-sm text-gray-500 mt-3">📍 {vehicle.location}</p>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-5">
          <p className="text-lg font-bold text-primary">
            ${vehicle.pricePerDay}
            <span className="text-sm font-normal text-gray-500">/day</span>
          </p>

          <Link
            to={`/vehicle-details/${vehicle._id}`}
            className="px-4 py-2 text-sm font-medium rounded-xl bg-primary text-white hover:bg-primary/90 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

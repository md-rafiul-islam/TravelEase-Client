import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateVehicle = () => {
  const vehicle = useLoaderData();
  const navigate = useNavigate();

  const handleUpdateVehicle = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedVehicle = {
      vehicleName: form.vehicleName.value,
      category: form.category.value,
      fuelType: form.fuelType.value,
      pricePerDay: Number(form.pricePerDay.value),
      location: form.location.value,
      availability: form.availability.value,
      description: form.description.value,
      coverImage: form.coverImage.value,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Modify it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/update-vehicles/${vehicle._id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedVehicle),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount == 1) {
              Swal.fire({
                title: "Updated!",
                text: "Vehicle info have been updated.",
                icon: "success",
              });
              navigate("/my-vehicles");
            }
          });
      }
    });

    // console.log(updatedVehicle);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <title>TravelEase-Update Vehicle</title>
      <h2 className="text-3xl font-bold mb-6">Update Vehicle</h2>
      <form
        onSubmit={handleUpdateVehicle}
        className="bg-white p-6 rounded-2xl shadow space-y-4"
      >
        {/* Vehicle Name */}
        <div>
          <label className="label">
            <span className="label-text">Vehicle Name</span>
          </label>
          <input
            name="vehicleName"
            defaultValue={vehicle.vehicleName}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Owner */}
        <div>
          <label className="label">
            <span className="label-text">Owner</span>
          </label>
          <input
            value={vehicle.owner}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Category */}
        <div>
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            name="category"
            defaultValue={vehicle.category}
            className="select select-bordered w-full"
            required
          >
            <option>Sedan</option>
            <option>SUV</option>
            <option>Electric</option>
            <option>Van</option>
          </select>
        </div>

        {/* Fuel Type */}
        <div>
          <label className="label">
            <span className="label-text">Fuel Type</span>
          </label>
          <select
            name="fuelType"
            defaultValue={vehicle.categories}
            className="select select-bordered w-full"
            required
          >
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Electric</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="label">
            <span className="label-text">Price Per Day</span>
          </label>
          <input
            type="number"
            name="pricePerDay"
            defaultValue={vehicle.pricePerDay}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            name="location"
            defaultValue={vehicle.location}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Availability */}
        <div>
          <label className="label">
            <span className="label-text">Availability</span>
          </label>
          <select
            name="availability"
            defaultValue={vehicle.availability}
            className="select select-bordered w-full"
            required
          >
            <option>Available</option>
            <option>Booked</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            defaultValue={vehicle.description}
            className="textarea textarea-bordered w-full"
            rows={3}
            required
          ></textarea>
        </div>

        {/* Cover Image */}
        <div>
          <label className="label">
            <span className="label-text">Cover Image URL</span>
          </label>
          <input
            name="coverImage"
            defaultValue={vehicle.coverImage}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* User Email */}
        <div>
          <label className="label">
            <span className="label-text">User Email</span>
          </label>
          <input
            value={vehicle.userEmail}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          Update Vehicle
        </button>
      </form>
    </div>
  );
};

export default UpdateVehicle;

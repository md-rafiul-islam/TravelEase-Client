import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AddVehicle = () => {
  const { user } = useContext(Authcontext);
  const instanceSecure = useAxiosSecure();
  const navigate = useNavigate();

  const handleAddVehicle = (e) => {
    e.preventDefault();

    const form = e.target;

    const vehicleData = {
      vehicleName: form.vehicleName.value,
      owner: user?.displayName || "Unknown",
      category: form.category.value,
      pricePerDay: Number(form.pricePerDay.value),
      location: form.location.value,
      availability: form.availability.value,
      description: form.description.value,
      coverImage: form.coverImage.value,
      userEmail: user?.email,
      createdAt: new Date().toISOString(),
      categories: form.fuelType.value,
    };
    // console.log(vehicleData);

    instanceSecure
      .post(
        `http://localhost:3000/add-vehicle?email=${user.email}`,
        vehicleData,
      )
      .then((data) => {
        if (data.data.acknowledged == true) {
          Swal.fire({
            title: "Success!",
            text: "Vehicle have been added!",
            icon: "success",
          });
          navigate("/my-vehicles");
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <title>TravelEase-AddVehicle</title>
      <h2 className="text-3xl font-bold mb-6">Add New Vehicle</h2>
      <form
        onSubmit={handleAddVehicle}
        className="bg-white p-6 rounded-2xl shadow space-y-5"
      >
        {/* Vehicle Name */}
        <input
          name="vehicleName"
          placeholder="Vehicle Name"
          className="input input-bordered w-full"
          required
        />

        {/* Owner Name*/}
        <input
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />

        {/* Category */}
        <select
          name="category"
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Category</option>
          <option>Sedan</option>
          <option>SUV</option>
          <option>Electric</option>
          <option>Van</option>
        </select>

        {/* Fuel Type */}
        <select
          name="fuelType"
          className="select select-bordered w-full"
          required
        >
          <option value="">Fuel Type</option>
          <option>Petrol</option>
          <option>Diesel</option>
          <option>Electric</option>
          <option>Hybrid</option>
        </select>

        {/* Price */}
        <input
          type="number"
          name="pricePerDay"
          placeholder="Price Per Day"
          className="input input-bordered w-full"
          required
        />

        {/* Location */}
        <input
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />

        {/* Availability */}
        <select
          name="availability"
          className="select select-bordered w-full"
          required
        >
          <option>Available</option>
          <option>Booked</option>
        </select>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Vehicle Description"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>

        {/* Cover Image */}
        <input
          name="coverImage"
          placeholder="Cover Image URL"
          className="input input-bordered w-full"
          required
        />

        {/* User Email (Readonly) */}
        <input
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full bg-gray-100"
        />

        <button className="btn btn-primary w-full">Add Vehicle</button>
      </form>
    </div>
  );
};

export default AddVehicle;

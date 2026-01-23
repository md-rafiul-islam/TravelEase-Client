import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../provider/AuthProvider";

const MyBookings = () => {
  const { user } = useContext(Authcontext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/mybookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">No bookings found 🚫</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking._id} className="border rounded-xl p-4 flex gap-4">
              <img
                src={booking.coverImage}
                className="w-32 h-24 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-lg">{booking.vehicleName}</h3>
                <p className="text-sm text-gray-500">
                  Location: {booking.location}
                </p>
                <p className="text-sm">Price: ৳{booking.pricePerDay}/day</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;

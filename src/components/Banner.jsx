import React from "react";

const Banner = () => {
  return (
    <section className="relative bg-linear-to-r from-emerald-700 to-teal-600 text-white">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Explore More with <span className="text-emerald-200">TravelEase</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto">
          Reliable car rentals for every journey. Book easily, drive safely, and
          travel freely wherever the road takes you.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-white text-emerald-700 font-semibold rounded-xl shadow hover:bg-emerald-50 transition">
            Book a Car
          </button>

          <button className="px-8 py-3 border border-white/70 text-white font-semibold rounded-xl hover:bg-white/10 transition">
            Explore Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;

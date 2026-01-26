import React from "react";
import Banner from "../components/Banner";
import { useLoaderData } from "react-router";
import LatestVehicles from "../components/LatestVehicles";

const Home = () => {
  const latestData = useLoaderData();
  // console.log(latestData);
  return (
    <div className="bg-secondary rounded-2xl">
      <title>TravelEase-Home</title>
      <Banner></Banner>

      <LatestVehicles vehicles={latestData.data}></LatestVehicles>
    </div>
  );
};

export default Home;

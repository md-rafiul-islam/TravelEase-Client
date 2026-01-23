import React, { use } from "react";
import { Authcontext } from "../provider/AuthProvider";

const MyVehicle = () => {
  const { user } = use(Authcontext);
  console.log(user);
  return (
    <div>
      <p>my vehicles</p>
    </div>
  );
};

export default MyVehicle;

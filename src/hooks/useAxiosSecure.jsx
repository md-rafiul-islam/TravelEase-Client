import axios from "axios";
import React, { use } from "react";
import AuthProvider, { Authcontext } from "../provider/AuthProvider";

const instanceSecure = axios.create({
  baseURL: "http://localhost:3000",

  headers: { "X-Custom-Header": "foobar" },
});
const useAxiosSecure = () => {
  const { user } = use(Authcontext);
  // access token pathabo
  instanceSecure.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  return instanceSecure;
};

export default useAxiosSecure;

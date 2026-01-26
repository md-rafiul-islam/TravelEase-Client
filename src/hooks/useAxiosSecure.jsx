import axios from "axios";
import React, { use, useEffect } from "react";
import AuthProvider, { Authcontext } from "../provider/AuthProvider";
import { useNavigate } from "react-router";

const instanceSecure = axios.create({
  baseURL: "https://travel-ease-server-mu.vercel.app",

  headers: { "X-Custom-Header": "foobar" },
});
const useAxiosSecure = () => {
  const { user, logOut } = use(Authcontext);
  const navigate = useNavigate();
  // access token pathabo
  useEffect(() => {
    const reqInterceptor = instanceSecure.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${user.accessToken}`;
        return config;
      },
    );

    // const resInterceptor = instanceSecure.interceptors.response.use(
    //   (res) => {
    //     return res;
    //   },
    //   (err) => {
    //     const status = err.status;
    //     if (status == 401 || status == 403) {
    //       console.log("Logging out user");
    //       logOut.then(() => {
    //         navigate("/login");
    //       });
    //     }
    //   },
    // );

    return () => {
      instanceSecure.interceptors.request.eject(reqInterceptor);
      // instanceSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user?.accessToken, logOut, navigate]);

  return instanceSecure;
};

export default useAxiosSecure;

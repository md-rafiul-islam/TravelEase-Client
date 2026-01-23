import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Authcontext } from "../provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleGoogleLogin, handleEmailAndPasswordLogin } = use(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();

  const loginWithGoogle = () => {
    handleGoogleLogin()
      .then((res) => {
        console.log(res);
        navigate(location.state || "/");
      })
      .catch((err) => console.log(err));
  };

  const loginWithEmail = (e) => {
    e.preventDefault();
    const { email, password } = e.target;

    handleEmailAndPasswordLogin(email.value, password.value)
      .then((userCredential) => {
        console.log(userCredential);
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <title>TravelEase-Login</title>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Login to continue to TravelEase</p>
        </div>

        {/* Form */}
        <form onSubmit={loginWithEmail} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="you@email.com"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Google Login (UI only) */}
        <button
          onClick={loginWithGoogle}
          type="button"
          className="w-full flex items-center justify-center gap-3 py-3 border rounded-xl hover:bg-gray-50 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="font-medium">Continue with Google</span>
        </button>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-primary font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

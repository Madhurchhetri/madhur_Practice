import React from "react";
import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  
    let {register,handleSubmit,errors,onLogin,} = useAuth();

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30 mb-5">
            <span className="text-white text-2xl font-bold">A</span>
          </div>

          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-400 mt-2">
            Login to continue to your account
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/[0.05] border border-white/10 backdrop-blur-xl rounded-3xl p-7 shadow-2xl">

          <form
            onSubmit={handleSubmit(onLogin)}
            className="space-y-5"
          >

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
              />

              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-300">
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs text-violet-400 hover:text-violet-300"
                >
                  Forgot password?
                </button>
              </div>

              <input
                type="password"
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
              />

              {errors.password && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold hover:opacity-90 active:scale-[0.98] transition shadow-lg shadow-violet-500/20"
            >
              Login
            </button>

          </form>

          {/* Register */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?

            <NavLink 
            to='/register'
            className="text-violet-400 hover:text-violet-300 ml-1 font-medium"
            >
                Create account
            </NavLink>
          </p>

        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          © 2026 Your App. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default Login;
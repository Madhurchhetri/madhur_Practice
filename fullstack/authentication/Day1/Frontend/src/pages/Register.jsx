import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  let {register,handleSubmit,errors,onRegister,password} = useAuth();

 


  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30 mb-5">
            <span className="text-white text-2xl font-bold">A</span>
          </div>

          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-gray-400 mt-2">
            Create your account and get started
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/[0.05] border border-white/10 backdrop-blur-xl rounded-3xl p-7 shadow-2xl">

          <form
            onSubmit={handleSubmit(onRegister)}
            className="space-y-5"
          >

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
              />

              {errors.name && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

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
              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>

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

            {/* Confirm Password */}
            {/* <div>
              <label className="block text-sm text-gray-300 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none focus:border-violet-500 transition"
              />

              {errors.confirmPassword && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div> */}

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold hover:opacity-90 active:scale-[0.98] transition shadow-lg shadow-violet-500/20"
            >
              Create Account
            </button>

          </form>

          {/* Login */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?

              <NavLink
              to='/'
              className="text-violet-400 hover:text-violet-300 ml-1 font-medium"
              >
                     Login
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

export default Register;
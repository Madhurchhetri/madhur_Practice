"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import PublicRoute from "@/components/PublicRoute";
import { useAuth } from "@/context/authContext";

const LoginPage = () => {
    let {hydrateUser} = useAuth();
    let router = useRouter()
    const [formData , setFormData] = useState({})
    console.log(formData);
    
    const handleChange = (e)=>{
        let {name,value} = e.target;
        setFormData({...formData , [name]:value})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await api.post('/api/auth/login' , formData)
            // console.log(res);
            // router.push('/home')
            hydrateUser();
            router.push('/layout/home')
            
        } catch (error) {
            console.log("error in login submit" , error);
            
        }
    }
  return (
    <PublicRoute>
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10 text-foreground">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Login to your account to continue
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <form 
          onSubmit={handleSubmit}
          className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium"
              >
                Email
              </label>

              <Input
                onChange = {handleChange}
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium"
              >
                Password
              </label>

              <Input
                onChange = {handleChange}
                name="password"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full cursor-pointer"
            >
              Login
            </Button>

          </form>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              Sign up
            </Link>
          </p>
        </div>

      </div>
    </div>
    </PublicRoute>
  );
};

export default LoginPage;


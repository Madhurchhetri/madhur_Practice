"use client";
import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10 text-foreground">
      {" "}
      <div className="w-full max-w-md">
        {" "}
        {/* Header */}{" "}
        <div className="mb-8 text-center">
          {" "}
          <h1 className="text-3xl font-bold tracking-tight">
            {" "}
            Create an account{" "}
          </h1>{" "}
          <p className="mt-2 text-sm text-muted-foreground">
            {" "}
            Create your account to get started{" "}
          </p>{" "}
        </div>{" "}
        {/* Register Card */}{" "}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          {" "}
          <form className="space-y-5">
            {" "}
            {/* Name */}{" "}
            <div className="space-y-2">
              {" "}
              <label htmlFor="name" className="text-sm font-medium">
                {" "}
                Name{" "}
              </label>{" "}
              <Input id="name" type="text" placeholder="Enter your name" />{" "}
            </div>{" "}
            {/* Email */}{" "}
            <div className="space-y-2">
              {" "}
              <label htmlFor="email" className="text-sm font-medium">
                {" "}
                Email{" "}
              </label>{" "}
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
              />{" "}
            </div>{" "}
            {/* Password */}{" "}
            <div className="space-y-2">
              {" "}
              <label htmlFor="password" className="text-sm font-medium">
                {" "}
                Password{" "}
              </label>{" "}
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
              />{" "}
            </div>{" "}
            {/* Register Button */}{" "}
            <Button type="submit" className="w-full cursor-pointer">
              {" "}
              Create Account{" "}
            </Button>{" "}
          </form>{" "}
          {/* Login Link */}{" "}
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {" "}
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              {" "}
              Login{" "}
            </Link>{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default RegisterPage;

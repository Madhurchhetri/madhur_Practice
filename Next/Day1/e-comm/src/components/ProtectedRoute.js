"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [ loading, user, router]);

  if (loading) {
    return <h1>loading...</h1>;
  }

  if (!user) return null;
  

  return children;
};

export default ProtectedRoute;
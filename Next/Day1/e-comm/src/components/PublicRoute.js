"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/layout/home");
    }
  }, [user, loading, router]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (user) {
    return null;
  }

  return children;
};

export default PublicRoute;

"use client";

import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const Auth = createContext();

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const hydrateUser = async () => {
    try {
      const res = await api.get("/api/auth/me");

      console.log("logged in user:", res.data);
      setUser(res.data.user);
     return true;
    } catch (error) {
      setUser(null);
      console.log("user not logged in" , error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    hydrateUser();
  }, []);

  return (
    <Auth.Provider value={{ user, loading , hydrateUser }}>
      {children}
    </Auth.Provider>
  );
};

export const useAuth = () => useContext(Auth);


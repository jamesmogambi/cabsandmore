// components/ServicesInitializer.jsx
"use client";

import { useEffect } from "react";
import useServicesStore from "@/store/servicesStore";

export function ServicesInitializer({ initialServices, error }) {
  const setServices = useServicesStore((state) => state.setServices);
  const setError = useServicesStore((state) => state.setError);
  const setLoading = useServicesStore((state) => state.setLoading);
  const isInitialized = useServicesStore((state) => state.isInitialized);

  useEffect(() => {
    if (!isInitialized) {
      if (error) {
        setError(error);
      } else if (initialServices && Array.isArray(initialServices)) {
        // The services are already converted to plain objects
        setServices(initialServices);
      }
      setLoading(false);
    }
  }, [
    initialServices,
    error,
    setServices,
    setError,
    setLoading,
    isInitialized,
  ]);

  // This component doesn't render anything
  return null;
}

// app/services-wrapper.jsx
import { fetchServices } from "@/actions/services";
import { ServicesInitializer } from "@/components/ServicesInitializer";
import Header from "@/components/Header";

export default async function ServicesWrapper({ children }) {
  // Fetch services on the server
  const { success, services, error } = await fetchServices();

  return (
    <>
      {/* Initialize services in Zustand store */}
      <ServicesInitializer
        initialServices={success ? services : null}
        error={success ? null : error}
      />

      {/* Your app content */}
      {children}
    </>
  );
}

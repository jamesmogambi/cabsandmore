// stores/servicesStore.js
import { create } from "zustand";

const useServicesStore = create((set, get) => ({
  services: [],
  loading: false,
  error: null,
  isInitialized: false,

  // Set services from server action
  setServices: (services) => {
    set({
      services,
      loading: false,
      error: null,
      isInitialized: true,
    });
  },

  // Set loading state
  setLoading: (loading) => {
    set({ loading });
  },

  // Set error state
  setError: (error) => {
    set({ error, loading: false });
  },

  // Get services by category
  getServicesByCategory: (category) => {
    const { services } = get();
    return services.filter((service) => service.category === category);
  },

  // Get all categories
  getCategories: () => {
    const { services } = get();
    const categories = new Set(services.map((service) => service.category));
    return Array.from(categories);
  },

  // Get category counts
  getCategoryCount: () => {
    const { services } = get();
    const categoryMap = new Map();

    services.forEach((service) => {
      categoryMap.set(
        service.category,
        (categoryMap.get(service.category) || 0) + 1,
      );
    });

    return Array.from(categoryMap.entries()).map(([category, count]) => ({
      category,
      count,
    }));
  },

  // Get active services
  getActiveServices: () => {
    const { services } = get();
    return services.filter((service) => service.status === "Active");
  },

  // Get services by county
  getServicesByCounty: (countyName) => {
    const { services } = get();
    return services.filter(
      (service) =>
        service.countyNames && service.countyNames.includes(countyName),
    );
  },

  // Get services grouped by category
  getGroupedServices: () => {
    const { services } = get();
    const groups = {
      delivery: [],
      "provider-service": [],
      "video-consulting-services": [],
      transport: [],
    };

    services.forEach((service) => {
      if (service.category === "delivery") {
        groups.delivery.push(service);
      } else if (service.category === "provider-service") {
        groups["provider-service"].push(service);
      } else if (service.category === "video-consulting-services") {
        groups["video-consulting-services"].push(service);
      } else if (service.category === "transport") {
        groups.transport.push(service);
      }
    });

    return groups;
  },

  // Get active services grouped by category
  getActiveGroupedServices: () => {
    const { services } = get();
    const groups = {
      delivery: [],
      "provider-service": [],
      "video-consulting-services": [],
      transport: [],
    };

    services.forEach((service) => {
      if (service.status === "Active") {
        if (service.category === "delivery") {
          groups.delivery.push(service);
        } else if (service.category === "provider-service") {
          groups["provider-service"].push(service);
        } else if (service.category === "video-consulting-services") {
          groups["video-consulting-services"].push(service);
        } else if (service.category === "transport") {
          groups.transport.push(service);
        }
      }
    });

    return groups;
  },
}));

export default useServicesStore;

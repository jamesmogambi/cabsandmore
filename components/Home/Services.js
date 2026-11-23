import ServiceCard from "../ServiceCard";
import SectionHeading from "./SectionHeading";

const services = [
  {
    name: "Taxi Booking",
    category: "Transport",
    description:
      "Book a comfortable ride in minutes, wherever you are in the city.",
    image: "/images/featured-services/taxi-booking.jpg",
  },
  {
    name: "Bike Booking",
    category: "Transport",
    description:
      "Beat traffic with quick, affordable boda boda rides at tap of a button.",
    image: "/images/featured-services/bike-booking.jpg",
  },
  {
    name: "Food Delivery",
    category: "On-demand",
    description:
      "Your favourite meals, delivered fresh and fast to your doorstep.",
    image: "/images/featured-services/food-delivery.jpg",
  },
  {
    name: "Courier Delivery",
    category: "Transport",
    description:
      "Send parcels and documents safely across town or nationwide.",
    image: "/images/featured-services/courier-delivery.jpg",
  },
  {
    name: "Grocery Delivery",
    category: "On-demand",
    description:
      "Fresh groceries and daily essentials from local stores, delivered.",
    image: "/images/featured-services/grocery-delivery.jpg",
  },
  {
    name: "Home Cleaning",
    category: "Handyman",
    description:
      "Book trusted professionals to keep your home clean and tidy.",
    image: "/images/featured-services/home-cleaning.jpg",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1140px] px-4">
        <SectionHeading
          eyebrow="What we do"
          title="One app for your everyday"
          description="From getting across town to getting things done, Cabs&More brings the services you use most into one simple experience."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
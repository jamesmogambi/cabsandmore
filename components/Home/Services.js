"use client";
import ServiceCard from "../ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    name: "Taxi Booking",
    category: "Transport",
    description:
      "With taxi booking services, customer has able to book their ride whenever and wherever they want.",
    image: "/images/featured-services/taxi-booking.jpg",
  },

  {
    name: "Bike Booking",
    category: "Transport",
    description:
      "Do you want to ride a bike? You can book a bike without any hassle and enjoy your ride.",
    image: "/images/featured-services/bike-booking.jpg",
  },
  {
    name: "Food Delivery",
    category: "On-demand",
    description:
      "Get the portion of your favourite meal at your doorstep using the food delivery service.",
    image: "/images/featured-services/food-delivery.jpg",
  },
  {
    name: "Courier Delivery",
    category: "Transport",
    description:
      "Make sure to send/receive couriers and parcels across the cities or outside.",
    image: "/images/featured-services/courier-delivery.jpg",
  },
  {
    name: "Grocery Delivery",
    category: "On-demand",

    description:
      "With grocery delivery service, facilitate ordering fresh groceries from different stores.",
    image: "/images/featured-services/grocery-delivery.jpg",
  },
  {
    name: "Home Cleaning",
    category: "Handyman",
    description:
      "Need help to clean your home? Make your house clean and tidy with our house cleaning services.",
    image: "/images/featured-services/home-cleaning.jpg",
  },
];

const Services = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full  md:max-w-[1140px] py-8">
        <div className="flex flex-col mb-6 gap-6 justify-centerr items-center">
          <h1 className="text-center text-[40px] text-black">Our Services</h1>
          <p className="text-[18px] text-center max-w-[500px] leading-normal ">
            Dive into each service to understand them better. With this App,
            you’ll be able to make the most of each of these aspects.
          </p>
        </div>

        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full flex flex-col md:flex-row flex-wrap">
            {services.map((i, k) => (
              <div key={k} className=" w-full  md:basis-1/3 px-3 pb-6">
                <ServiceCard service={i} key={k} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

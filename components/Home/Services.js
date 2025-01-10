"use client";
import ServiceCard from "../ServiceCard";
import { motion } from "framer-motion";

const services = [
  {
    name: "Taxi Booking",
    category: "Transport",
    description:
      "With taxi booking services, customer has able to book their ride whenever and wherever they want.",
    image:
      "https://media.istockphoto.com/id/1413484230/photo/young-woman-ordering-a-ride-to-the-airport-via-smart-phone.jpg?s=2048x2048&w=is&k=20&c=7uwcXlFksl4WGKeTRFPkXUT3zN2fJr86FpwESg5XS4E=",
  },

  {
    name: "Bike Booking",
    category: "Transport",
    description:
      "Do you want to ride a bike? You can book a bike without any hassle and enjoy your ride.",
    image:
      "https://media.istockphoto.com/id/1236580926/photo/portrait-of-delivery-man-in-front-of-the-delivery-place-checking-delivery-spreadsheet.jpg?s=2048x2048&w=is&k=20&c=5LavO_ukeIcWNd3dKC5RjPMIM83d9QR3w4QyB2EpcfQ=",
  },
  {
    name: "Food Delivery",
    category: "On-demand",
    description:
      "Get the portion of your favourite meal at your doorstep using the food delivery service.",
    image:
      "https://media.istockphoto.com/id/961983276/photo/cropped-shot-of-african-american-barista-holding-disposable-coffee-cups-and-paper-bags-in-cafe.jpg?s=2048x2048&w=is&k=20&c=2c5b6QUzhJo1gXQ4KZ7IXR6d72v9Ig93grNFGd5JU7E=",
  },
  {
    name: "Courier Delivery",
    category: "Transport",
    description:
      "Make sure to send/receive couriers and parcels across the cities or outside.",
    image:
      "https://media.istockphoto.com/id/1326431774/photo/happy-african-american-woman-receiving-box-from-courier-at-home.jpg?s=2048x2048&w=is&k=20&c=TrQCUU8Mvs2Wpm4nIcUU_XL90LqLFBAMWvwTzTtORk8=",
  },
  {
    name: "Grocery Delivery",
    category: "On-demand",

    description:
      "With grocery delivery service, facilitate ordering fresh groceries from different stores.",
    image:
      "https://media.istockphoto.com/id/1572379620/photo/closeup-of-nurse-bringing-bag-with-groceries-to-senior-man-in-wheelchair.jpg?s=2048x2048&w=is&k=20&c=1QAbFZR_pzUoXAlBCwmmqJI5QHgs5vz67EvWl3-zgjI=",
  },
  {
    name: "Home Cleaning",
    category: "Handyman",
    description:
      "Need help to clean your home? Make your house clean and tidy with our house cleaning services.",
    image:
      "https://media.istockphoto.com/id/1214907685/photo/hands-with-glove-wiping-doorknob.jpg?s=2048x2048&w=is&k=20&c=vle7Wje_yrhaijdGXSyUpC-svwQqaPNDcpQvBs5hmWM=",
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

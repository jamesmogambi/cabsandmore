// scripts/seedFirestore.js
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const sampleOrders = [
  {
    type: "Courier Service",
    orderID: "#24454555",
    status: "Pending",
    date: "Sun 24,Mar,2024",
    time: "11:24 pm",
    origin:
      "1650, Amphitheatre Parkway, Mountain View, Uasin Gishu County, 94043, Eldoret,",
    destination:
      "1650, Amphitheatre Parkway, Mountain View, Uasin Gishu County, 94043, Eldoret,",
    cost: 1500,
    icon: "https://foxjekapp24.startuptrinity.com/assets/images/service-category/06473320232512.png",
    createdAt: Timestamp.fromDate(new Date()),
    updatedAt: Timestamp.fromDate(new Date()),
  },
  // Add more sample orders...
];

async function seedOrders() {
  try {
    const ordersRef = collection(db, "orders");
    for (const order of sampleOrders) {
      await addDoc(ordersRef, order);
      console.log("Added order:", order.orderID);
    }
    console.log("All orders seeded successfully!");
  } catch (error) {
    console.error("Error seeding orders:", error);
  }
}

seedOrders();

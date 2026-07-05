import { Webhook } from "svix";
import { headers } from "next/headers";
import { adminDb } from "@/lib/firebase-admin";

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Please add WEBHOOK_SECRET from Clerk Dashboard");
  }

  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;

  try {
    evt = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occurred", {
      status: 400,
    });
  }

  const { id, email_addresses, first_name, last_name, image_url } = evt.data;
  const email = email_addresses?.[0]?.email_address || "";

  // Handle user creation
  if (evt.type === "user.created") {
    try {
      const userData = {
        clerkId: id,
        email,
        firstName: first_name || "",
        lastName: last_name || "",
        fullName: `${first_name || ""} ${last_name || ""}`.trim(),
        imageUrl: image_url || "",
        createdAt: new Date(),
        updatedAt: new Date(),
        role: "user",
        isActive: true,
        authProvider: "social", // or detect from data
      };

      // Store in Firestore
      await adminDb.collection("users").doc(id).set(userData);

      console.log(`User ${id} created in Firestore`);
    } catch (error) {
      console.error("Error storing user in Firestore:", error);
      return new Response("Error storing user", { status: 500 });
    }
  }

  // Handle user updates
  if (evt.type === "user.updated") {
    try {
      const updateData = {
        email,
        firstName: first_name || "",
        lastName: last_name || "",
        fullName: `${first_name || ""} ${last_name || ""}`.trim(),
        imageUrl: image_url || "",
        updatedAt: new Date(),
      };

      await adminDb.collection("users").doc(id).update(updateData);
      console.log(`User ${id} updated in Firestore`);
    } catch (error) {
      console.error("Error updating user in Firestore:", error);
      return new Response("Error updating user", { status: 500 });
    }
  }

  // Handle user deletion
  if (evt.type === "user.deleted") {
    try {
      await adminDb.collection("users").doc(id).delete();
      console.log(`User ${id} deleted from Firestore`);
    } catch (error) {
      console.error("Error deleting user from Firestore:", error);
      return new Response("Error deleting user", { status: 500 });
    }
  }

  return new Response("Webhook received", { status: 200 });
}

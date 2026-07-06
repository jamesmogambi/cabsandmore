"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import PhoneInput from "react-phone-input-2";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import "react-phone-input-2/lib/style.css";
import {
  getUserFromFirestore,
  updateUserInFirestore,
} from "@/app/user-actions";

const ProfileForm = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    emergencyPhone: "",
  });

  const [isUpdating, setIsUpdating] = useState(false);
  const [updateMessage, setUpdateMessage] = useState({ type: "", text: "" });

  const fileInputRef = useRef(null);

  // Load user data from Clerk and Firestore
  useEffect(() => {
    const loadUserData = async () => {
      // Only proceed if Clerk has loaded and user is signed in
      if (!isLoaded) {
        return;
      }

      if (!isSignedIn) {
        router.push("/sign-in");
        return;
      }

      try {
        setIsLoading(true);

        // Get data from Clerk
        const firstName = user.firstName || "";
        const lastName = user.lastName || "";
        const email = user.emailAddresses?.[0]?.emailAddress || "";

        setFormData((prev) => ({
          ...prev,
          firstName,
          lastName,
          email,
        }));

        // Display avatar from Clerk
        if (user.imageUrl) {
          setImage(user.imageUrl);
        }

        // Get phone numbers from Firestore
        try {
          const userData = await getUserFromFirestore(user.id);
          if (userData) {
            setFormData((prev) => ({
              ...prev,
              phone: userData.phone || "",
              emergencyPhone: userData.emergencyPhone || "",
            }));
          }
        } catch (firestoreError) {
          console.error("Error loading Firestore data:", firestoreError);
          // Continue even if Firestore fails - we still have Clerk data
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUserData();
  }, [isLoaded, isSignedIn, user, router]);

  // Update avatar when user changes (e.g., after upload)
  useEffect(() => {
    if (isLoaded && isSignedIn && user?.imageUrl) {
      setImage(user.imageUrl);
    }
  }, [isLoaded, isSignedIn, user?.imageUrl]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Show preview immediately
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);

      // Upload image to Clerk only
      try {
        await user?.setProfileImage({ file });
        await user?.reload();

        // Update image with Clerk's permanent URL
        if (user?.imageUrl) {
          setImage(user.imageUrl);
        }

        setUpdateMessage({
          type: "success",
          text: "Profile image updated successfully!",
        });
        setTimeout(() => setUpdateMessage({ type: "", text: "" }), 3000);
      } catch (error) {
        console.error("Error uploading image:", error);
        setUpdateMessage({
          type: "error",
          text: "Failed to update profile image",
        });
        setTimeout(() => setUpdateMessage({ type: "", text: "" }), 3000);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleEmergencyPhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      emergencyPhone: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSignedIn || !user) {
      router.push("/sign-in");
      return;
    }

    setIsUpdating(true);
    setUpdateMessage({ type: "", text: "" });

    try {
      // 1. Update Clerk user profile (firstName, lastName)
      await user.update({
        firstName: formData.firstName,
        lastName: formData.lastName,
      });

      // 2. Update Firestore with non-avatar data
      const firestoreData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        emergencyPhone: formData.emergencyPhone,
        updatedAt: new Date(),
      };

      const result = await updateUserInFirestore(user.id, firestoreData);

      if (!result.success) {
        throw new Error("Failed to update Firestore");
      }

      // Refresh user from Clerk
      await user.reload();

      // Update image in case it changed
      if (user?.imageUrl) {
        setImage(user.imageUrl);
      }

      setUpdateMessage({
        type: "success",
        text: "Profile updated successfully!",
      });
      setTimeout(() => setUpdateMessage({ type: "", text: "" }), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setUpdateMessage({
        type: "error",
        text: "Failed to update profile. Please try again.",
      });
      setTimeout(() => setUpdateMessage({ type: "", text: "" }), 3000);
    } finally {
      setIsUpdating(false);
    }
  };

  // Show loading state
  if (!isLoaded || isLoading) {
    return (
      <div className="border-[1.5px] overflow-hidden border-neutral-300 rounded-[5px]">
        <div className="p-4 bg-[#FBFAFA]">
          <h5 className="text-[20px] font-bold">My Profile</h5>
        </div>
        <div className="bg-white pb-10 overflow-hidden">
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#4ab574]"></div>
              <p className="mt-2 text-gray-500">Loading profile...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If not signed in, redirect
  if (!isSignedIn) {
    router.push("/sign-in");
    return null;
  }

  return (
    <form
      className="border-[1.5px] overflow-hidden border-neutral-300 rounded-[5px]"
      onSubmit={handleSubmit}
    >
      <div className="p-4 bg-[#FBFAFA]">
        <h5 className="text-[20px] font-bold">My Profile</h5>
      </div>
      <div className="bg-white pb-10 overflow-hidden">
        {/* User Avatar */}
        <div className="flex pt-4 pb-8 justify-center items-center">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <div className="w-[100px] cursor-pointer relative group rounded-full h-[100px] border-[2px] border-neutral-200 overflow-hidden">
            {image ? (
              <Image className="object-cover" src={image} fill alt="Profile" />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-4xl">
                {formData.firstName?.[0] || formData.email?.[0] || "?"}
              </div>
            )}
            <div className="inset-0 absolute bg-white opacity-70 invisible group-hover:visible"></div>
            <div
              onClick={handleButtonClick}
              className="absolute flex justify-center items-center inset-0 invisible group-hover:visible"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#78716c"
                className="w-7 h-7"
              >
                <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="w-full px-5 space-y-4">
          <div className="flex w-full flex-col lg:flex-row gap-3">
            <div className="w-full space-y-2 lg:w-1/2">
              <Label className="text-[#9f9c9c]">First Name</Label>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border-neutral-300 text-base rounded-[5px]"
              />
            </div>
            <div className="w-full space-y-2 lg:w-1/2">
              <Label className="text-[#9f9c9c]">Last Name</Label>
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border-neutral-300 text-base rounded-[5px]"
              />
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row gap-3">
            <div className="w-full space-y-2 lg:w-1/2">
              <Label className="text-[#9f9c9c]">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                disabled
                className="border-neutral-300 text-base rounded-[5px] bg-gray-50"
              />
            </div>
            <div className="w-full space-y-2 lg:w-1/2">
              <Label className="text-[#9f9c9c]">Contact Number</Label>
              <div className="block">
                <PhoneInput
                  country={"ke"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputStyle={{
                    width: "100%",
                    height: 39,
                    fontSize: 16,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col lg:flex-row gap-3">
            <div className="w-full space-y-2 lg:w-1/2">
              <Label className="text-[#9f9c9c]">Emergency Contact Number</Label>
              <div>
                <PhoneInput
                  country={"ke"}
                  value={formData.emergencyPhone}
                  onChange={handleEmergencyPhoneChange}
                  inputStyle={{
                    width: "100%",
                    height: 39,
                    fontSize: 16,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Update Message */}
        {updateMessage.text && (
          <div
            className={`mx-5 mt-4 p-3 rounded-md ${
              updateMessage.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {updateMessage.text}
          </div>
        )}

        <div className="flex mt-5 justify-center items-center">
          <Button
            type="submit"
            disabled={isUpdating}
            className="text-lg border hover:bg-zinc-400 hover:border-none border-neutral-400 text-white w-2/4 bg-[#4ab574] rounded-[5px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUpdating ? "Updating..." : "Update"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;

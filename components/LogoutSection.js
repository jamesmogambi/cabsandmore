"use client";

import React from "react";
import HomeSectionCard from "./HomeSectionCard";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const items = [
  "You will be logout from your account & need to login again to perform any action",
];

const LogoutSection = () => {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <HomeSectionCard className={"border-black"} title={"Logout My Account"}>
      <div className="bg-white p-4">
        <h5 className="text-[20px] font-medium mb-4">
          If you logout your account
        </h5>
        <ul className="list-disc pl-4">
          {items.map((i, k) => (
            <li className="text-base" key={k}>
              {i}
            </li>
          ))}
        </ul>
        <Button
          className="text-white hover:bg-zinc-900 my-2 mt-5 rounded-[6px] bg-zinc-700 text-lg font-light"
          onClick={handleLogout}
        >
          Logout Account
        </Button>
      </div>
    </HomeSectionCard>
  );
};

export default LogoutSection;

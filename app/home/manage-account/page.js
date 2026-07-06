import DeleteAccountSection from "@/components/DeleteAccountSection";
import LogoutSection from "@/components/LogoutSection";
import React from "react";

const page = () => {
  return (
    <div className="space-y-5">
      {/* TODO: Add a section to manage account settings, including options to delete the account and log out. */}
      {/* <DeleteAccountSection /> */}
      <LogoutSection />
    </div>
  );
};

export default page;

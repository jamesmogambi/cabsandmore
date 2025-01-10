import DeleteAccountSection from "@/components/DeleteAccountSection";
import LogoutSection from "@/components/LogoutSection";
import React from "react";

const page = () => {
  return (
    <div className="space-y-5">
      <DeleteAccountSection />
      <LogoutSection />
    </div>
  );
};

export default page;

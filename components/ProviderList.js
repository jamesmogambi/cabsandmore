import { providers } from "@/data/providers";
import { cn } from "@/lib/utils";
import React from "react";

const ProviderList = ({ className }) => {
  return (
    <div className={cn("", className)}>
      {providers.length > 0 ? (
        <>{/* TODO:Implement rendering providers */}</>
      ) : (
        <div className="py-3">
          <h2 className="text-xl font-semibold text-center">
            Provider Not Found ...
          </h2>
        </div>
      )}
    </div>
  );
};

export default ProviderList;

import { ArrowUpWideNarrow, CircleCheckBig, CircleX } from "lucide-react";
import React from "react";

const StatusBadge = ({ status }) => {
  return (
    <div
      className={`${status === "Pending" && "bg-orange-300"} ${
        status === "Completed" && "bg-emerald-400"
      } ${
        status === "Canceled" && "bg-red-400"
      } text-white text-lg font-semibold w-1/2 md:w-1/4 py-1.5 pl-4 rounded-l-full`}
    >
      <div className="flex items-center gap-4">
        {status === "Pending" && <ArrowUpWideNarrow className="w-5 h-5" />}
        {status === "Completed" && <CircleCheckBig />}
        {status === "Canceled" && <CircleX />}
        <h2>{status}</h2>
      </div>
    </div>
  );
};

export default StatusBadge;

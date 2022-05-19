import React from "react";

export const CardWithTitle = ({ title, children }) => {
  return (
    <div className="bg-white shadow p-3 rounded-lg ">
      <h1 className="text-gray-600 font-bold text-2xl border-b pb-1">{title}</h1>
      {children}
    </div>
  );
};

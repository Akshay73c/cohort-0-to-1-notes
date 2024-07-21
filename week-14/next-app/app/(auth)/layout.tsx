import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b text-center r">
        20% discount for the next 2 days
      </div>
      {children}
    </div>
  );
}

import { Events } from "@/modules/Events";
import React from "react";

export const EventsPage = () => {
  return (
    <div className="mt-10 min-h-screen">
      <h3 className="font-semibold text-4xl md:text-6xl">Upcoming events</h3>
      <Events />
    </div>
  );
};

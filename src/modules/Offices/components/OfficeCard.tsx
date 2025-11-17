import type { Office } from "@/types";
import { SiGooglemaps } from "react-icons/si";
import React from "react";
import { Button } from "@/ui/button";
import { Link } from "react-router";
interface OfficeCardProps {
  office: Office;
}
export const OfficeCard: React.FC<OfficeCardProps> = ({ office }) => {
  return (
    <div key={office.id} className="flex flex-col md:flex-row gap-4 md:gap-8">
      <img
        src={office.imageUrl}
        alt="office image"
        className=" rounded-2xl w-100 lg:w-120"
      />
      <div className="flex flex-col">
        <h4 className="text-lg md:text-3xl font-semibold">{office.name}</h4>
        <h4 className="text-md md:text-lg text-gray-300/80">
          {office.address}
        </h4>
        <div className="flex gap-2 mt-4 md:flex-col md:gap-0">
          {" "}
          <Link
            to={`https://www.google.com/maps?q=${encodeURIComponent(
              office.address
            )}`}
            target="_blank"
            className="my-2"
          >
            <Button>
              View on Google Maps <SiGooglemaps />
            </Button>
          </Link>
          <Link to={``} className="mt-2">
            <Button variant="outline">Check upcoming events</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

import { motion } from "motion/react";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationCard = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="my-12 mx-16 p-8 flex flex-col items-center gap-4 bg-[#24242444] shadow-xl/80 rounded-2xl cursor-pointer"
    >
      <img
        className="rounded-2xl object-cover object-bottom h-[240px] w-full duration-300 "
        src={imageSrc}
        alt="Our office"
      />
      <FaMapMarkerAlt
        className="text-white duration-300 hover:scale-[1.1]"
        size="24px"
      />
      <div className="text-lg">
        <p>our beautiful place in Dadizele blablblablablalblablalba</p>
      </div>
    </motion.div>
  );
};

export default LocationCard;

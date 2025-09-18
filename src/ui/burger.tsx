import { motion } from "motion/react";

const Burger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <button className="relative w-8 h-8 cursor-pointer">
      <motion.span
        className="absolute top-2 left-0 w-8 h-1 bg-white rounded"
        animate={isOpen ? { rotate: 45, y: 7.6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute top-4 left-0 w-8 h-1 bg-white rounded"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="absolute top-6 left-0 w-8 h-1 bg-white rounded"
        animate={isOpen ? { rotate: -45, y: -7.6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default Burger;

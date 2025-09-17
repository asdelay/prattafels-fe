import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { motion } from "motion/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/ui/drawer";
import { Separator } from "@/ui/separator";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-4 fixed top-0 left-0 right-0 flex justify-end items-center">
      <Drawer direction="left" onOpenChange={() => setIsOpen((prev) => !prev)}>
        <DrawerTrigger>
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
        </DrawerTrigger>
        <DrawerContent className="">
          <DrawerHeader>
            <DrawerTitle>HOME</DrawerTitle>
          </DrawerHeader>
          <Separator />
          <DrawerHeader>
            <DrawerTitle>LOCATIONS</DrawerTitle>
          </DrawerHeader>
          <Separator />
          <DrawerHeader>
            <DrawerTitle>ALL EVENTS</DrawerTitle>
          </DrawerHeader>
          <Separator />
          <DrawerHeader>
            <DrawerTitle>MY ACCOUNT</DrawerTitle>
          </DrawerHeader>
          <Separator />
          <DrawerHeader>
            <DrawerTitle>BECOME A TEACHER</DrawerTitle>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;

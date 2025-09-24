import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/ui/drawer";
import { Separator } from "@/ui/separator";
import { Link } from "react-router";
import Burger from "@/ui/burger";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" p-4 fixed top-0 left-0 right-0 flex justify-end items-center">
      <Drawer direction="left" onOpenChange={() => setIsOpen((prev) => !prev)}>
        <DrawerTrigger>
          <Burger isOpen={isOpen} />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <Link to="/">HOME</Link>
            </DrawerTitle>
          </DrawerHeader>
          <Separator />
          <DrawerHeader>
            <DrawerTitle>
              <Link to="/locations">LOCATIONS</Link>
            </DrawerTitle>
          </DrawerHeader>
          <Separator />
          <DrawerHeader>
            <DrawerTitle>
              <Link to="/events">ALL EVENTS</Link>
            </DrawerTitle>
          </DrawerHeader>
          <Separator />
          <DrawerHeader>
            <DrawerTitle>
              <Link to="/account">MY ACCOUNT</Link>
            </DrawerTitle>
          </DrawerHeader>
          <Separator />
          <DrawerHeader>
            <DrawerTitle>
              <Link to="/become-teacher">BECOME A TEACHER</Link>
            </DrawerTitle>
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;

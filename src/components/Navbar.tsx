import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/ui/drawer";
import { Separator } from "@/ui/separator";
import { Link } from "react-router";
import Burger from "@/ui/burger";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import Avatar from "./Avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state: RootState) => state.authSlice.user);
  return (
    <div className=" p-4 fixed top-0 left-0 right-0 flex justify-end items-center">
      <Drawer
        open={isOpen}
        direction="left"
        onOpenChange={() => setIsOpen((prev) => !prev)}
      >
        <DrawerTrigger>
          <Burger isOpen={isOpen} />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <Link to="/" onClick={() => setIsOpen(false)}>
                HOME
              </Link>
            </DrawerTitle>
          </DrawerHeader>
          <Separator />
          <DrawerHeader>
            <DrawerTitle>
              <Link to="/locations" onClick={() => setIsOpen(false)}>
                LOCATIONS
              </Link>
            </DrawerTitle>
          </DrawerHeader>
          <Separator />
          <DrawerHeader>
            <DrawerTitle>
              <Link to="/events" onClick={() => setIsOpen(false)}>
                ALL EVENTS
              </Link>
            </DrawerTitle>
          </DrawerHeader>
          <Separator />
          <DrawerHeader>
            <DrawerTitle>
              <Link to="/account" onClick={() => setIsOpen(false)}>
                MY ACCOUNT
              </Link>
            </DrawerTitle>
          </DrawerHeader>
          <Separator />
          <DrawerHeader>
            <DrawerTitle>
              <Link to="/become-teacher" onClick={() => setIsOpen(false)}>
                BECOME A TEACHER
              </Link>
            </DrawerTitle>
          </DrawerHeader>
          <DrawerFooter>
            {user ? (
              <Link to="/account" onClick={() => setIsOpen(false)}>
                <div className="flex items-center  gap-4 p-2 border-1 rounded-full">
                  {user.avatarUrl ? (
                    <img
                      className="size-8 rounded-full"
                      src={user.avatarUrl}
                      alt="user image"
                    />
                  ) : (
                    <Avatar fullName={user.fullName} />
                  )}
                  {user.fullName}
                </div>
              </Link>
            ) : (
              <div className="flex justify-center items-center gap-2">
                <Link to="/auth/register">Register</Link> |
                <Link to="/auth/login">Login</Link>{" "}
              </div>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;

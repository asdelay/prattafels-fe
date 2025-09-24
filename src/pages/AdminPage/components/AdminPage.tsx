import LeftsidePanel from "./LeftsidePanel";
import { Outlet } from "react-router";

export const AdminPage = () => {
  return (
    <div className="flex">
      <LeftsidePanel />

      <div className="ml-84 p-4">
        <Outlet />
      </div>
    </div>
  );
};

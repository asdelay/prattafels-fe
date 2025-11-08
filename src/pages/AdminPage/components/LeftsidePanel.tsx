import { BiBuildings } from "react-icons/bi";
import { LuUsers } from "react-icons/lu";
import { MdOutlineSpaceDashboard, MdEmojiEvents } from "react-icons/md";
import { Link } from "react-router";

const LeftsidePanel = () => {
  return (
    <div className="fixed w-84 flex flex-col h-full border-r-1  min-h-[100vh]">
      <div className="p-4 border-b">
        <h3 className="text-2xl font-bold font-[montserrat] tracking-widest ">
          PRAATTAFELS-ADMIN
        </h3>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1 mt-4 text-lg font-semibold text-gray-200">
        <div className="flex gap-2 items-center cursor-pointer">
          <MdOutlineSpaceDashboard />
          <h6>
            <Link to="/admin">Dashboard</Link>
          </h6>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <MdEmojiEvents />
          <h6>
            <Link to="/admin/events">Events</Link>
          </h6>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <LuUsers />
          <h6>
            <Link to="/admin/users">Users</Link>
          </h6>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <BiBuildings />
          <h6>
            <Link to="/admin/offices">Offices</Link>
          </h6>
        </div>
      </div>
      <div className="m-4 rounded-full p-4 bg-[#ffffff17] flex items-center gap-4">
        <div className="size-10 bg-[#d9d9d9] rounded-full"></div>
        <p>Jean-Pierre</p>
      </div>
    </div>
  );
};

export default LeftsidePanel;

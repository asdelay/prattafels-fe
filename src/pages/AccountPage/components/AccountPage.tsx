import Avatar from "@/components/Avatar";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { FaBell, FaBellSlash } from "react-icons/fa";

export const AccountPage = () => {
  const user = useSelector((state: RootState) => state.authSlice.user);
  return (
    <div className="min-h-[80vh] flex items-center flex-col gap-4">
      <h3 className="text-4xl font-bold">My Account</h3>
      <div className="flex flex-col items-center gap-1">
        {user?.avatarUrl ? (
          <img
            className="size-30 rounded-full"
            src={user.avatarUrl}
            alt="user avatar"
          />
        ) : (
          <Avatar
            className="size-30 text-2xl my-4"
            fullName={user?.fullName || ""}
          />
        )}
        <p className="text-2xl semibold">{user?.fullName}</p>
        <p className="text-lg semibold mb-4">{user?.email}</p>
        {user?.wantsNotifications ? (
          <FaBell size={32} />
        ) : (
          <FaBellSlash size={32} />
        )}
      </div>
    </div>
  );
};

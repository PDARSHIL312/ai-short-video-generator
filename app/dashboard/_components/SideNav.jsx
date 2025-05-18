import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from "lucide-react";
import React from "react";

const SideNav = () => {
  const MenuOptions = [
    {
      id: 1,
      name: "Dashboard",
      Path: "/dashboard",
      icon: PanelsTopLeft,
    },
    {
      id: 1,
      name: "Create New",
      Path: "/create-new",
      icon: FileVideo,
    },
    {
      id: 1,
      name: "Upgrade",
      Path: "/upgrade",
      icon: ShieldPlus,
    },
    {
      id: 1,
      name: "Account",
      Path: "/account",
      icon: CircleUser,
    },
  ];
  return (
    <div className="w-64 h-screen shadow-md p-5">
      {MenuOptions.map((item, index) => (
        <div
          key={index}
          className="flex gap-3 items-center p-2 hover:bg-gray-200 rounded-md cursor-pointer"
        >
          <item.icon />
          <p className="text-sm font-semibold">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default SideNav;

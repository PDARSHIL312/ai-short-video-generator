"use client";
import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
      id: 2,
      name: "Create New",
      Path: "/dashboard/create-new",
      icon: FileVideo,
    },
    {
      id: 3,
      name: "Upgrade",
      Path: "/upgrade",
      icon: ShieldPlus,
    },
    {
      id: 4,
      name: "Account",
      Path: "/account",
      icon: CircleUser,
    },
  ];

  const path = usePathname();

  return (
    <div className="w-64 h-screen shadow-md p-5">
      <div className="grid gap-3">
        {MenuOptions.map((item, index) => (
          <Link href={item.Path} key={index}>
            <div
              key={index}
              className={`flex gap-3 items-center p-3 hover:bg-violet-700 hover:text-white rounded-md cursor-pointer ${
                item.Path === path ? "bg-violet-700 text-white" : ""
              }`}
            >
              <item.icon />
              <p className="text-sm font-semibold">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;

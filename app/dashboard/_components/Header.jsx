import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div className="p-3 px-5 flex">
      <div className="flex gap-3 items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="h-[50px] w-[50px] object-contain"
        />
        <h2 className="font-bold text-xl">AI Shorts</h2>
      </div>
      <div className="flex gap-3 items-center ml-auto">
        <Button className="bg-violet-700">Click me</Button>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;

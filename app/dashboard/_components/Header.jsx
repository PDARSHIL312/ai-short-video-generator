import React from "react";
import Image from "next/image"; 

const Header = () => {
  return (
    <div className="p-3 px-5">
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
    </div>
  );
};

export default Header;

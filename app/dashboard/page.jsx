"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [videoList, setVideoList] = useState([]);

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <Link href="/dashboard/create-new">
          <Button className="bg-violet-700">+ Create New</Button>
        </Link>
      </div>

      {videoList.length === 0 ? (
        <div className="p-5 py-24 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
          <h2>No videos found. Create one!</h2>
          <Link href="/dashboard/create-new">
            <Button className="bg-violet-700">Create New Short</Button>
          </Link>
        </div>
      ) : (
        <div>Videos</div>
      )}
    </div>
  );
};

export default Page;

"use client";

import React from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";

const CustomLoading = ({ loading }) => {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="flex flex-col items-center justify-center gap-4">
        <video
          src="/loading.mp4"
          width={150}
          height={150}
          autoPlay
          loop
          muted
          playsInline
        />
        <p className="text-center text-sm text-gray-700">
          Generating Video.... DO Not Refresh
        </p>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomLoading;

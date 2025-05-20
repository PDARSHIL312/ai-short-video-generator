"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const SelectDuration = ({ onUserSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="mt-4 p-6">
      <h4 className="font-bold text-2xl sm:text-2xl text-violet-500">
        Select Duration
      </h4>
      <Select
        onValueChange={(value) => {
          setSelectedOption(value);
          onUserSelect("duration", value);
        }}
        value={selectedOption}
      >
        <SelectTrigger className="w-full mt-2 p-6  text-lg border-2 border-violet-500 rounded-lg ">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="30 Seconds">30 Seconds</SelectItem>
          <SelectItem value="60 Seconds">60 Seconds</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectDuration;

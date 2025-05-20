"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const SelectTopic = ({ onUserSelect }) => {
  const options = [
    "Custom Prompt",
    "Scary story",
    "Funny story",
    "Historical facts",
    "Bed Time Story",
    "Motivational Story",
    "Love Story",
    "Fun Facts",
    "Italian Brainrot",
  ];

  const [selectedOption, setSelectedOption] = React.useState("");

  return (
    <div>
      <h2 className="font-bold text-2xl text-violet-500">Content</h2>
      <p className="text-gray-500">What is the topic of the Content</p>
      <Select
        onValueChange={(value) => {
          setSelectedOption(value);
          value !== "Custom Prompt" && onUserSelect("topic", value);
        }}
        value={selectedOption}
      >
        <SelectTrigger className="w-full mt-2 p-6  text-lg border-2 border-violet-500 rounded-lg ">
          <SelectValue placeholder="Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedOption === "Custom Prompt" ? (
        <div className="grid w-full gap-1.5 mt-4 p-4 ">
          <Label htmlFor="message">Write your Prompt Here</Label>
          <Textarea
            id="message"
            placeholder="Type here..."
            onChange={(e) => onUserSelect("topic", e.target.value)}
          />
        </div>
      ) : null}
    </div>
  );
};

export default SelectTopic;

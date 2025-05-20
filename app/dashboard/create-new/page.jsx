"use client";
import React, { useEffect, useState } from "react";
import SelectTopic from "./_components/SelectTopic";
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";
import { Button } from "@/components/ui/button";
import CustomLoading from "./_components/CustomLoading";
import { generateSpeechFromScript } from "@/app/api/textToSpeechDownload.js";

const CreateNew = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState([]);
  const [videoScript, setVideoScript] = useState();
  const onHandlingInputChange = (fieldName, fieldValue) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: fieldValue,
    }));
  };

  const onCreateClickHandler = () => {
    generateVideoScript();
  };
  // Get Video Script
  const generateVideoScript = async () => {
    const prompt = `write a script to generate ${formData.duration} video on topic: Interesting ${formData.topic} along with the Ai Image Prompt in ${formData.imageStyle} Format for each scene and give me a result in json format with image Prompt and Content text as Field`;

    // console.log("Prompppppppppt", prompt);
    setLoading(true);
    const response = await fetch("/api/get-video-script", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    console.log("Dattttttttta", data.result.video_script); // The structured video script from Gemini
    data.result && setLoading(false);
    setVideoScript(data.result.video_script);
  };

  const handleClick = () => {
    generateSpeechFromScript(videoScript);
  };

  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-center text-violet-700 ">
        Create New
      </h2>
      <div className="mt-10 shadow-md rounded-lg p-10 bg-white">
        {/* Select Topic */}
        <SelectTopic onUserSelect={onHandlingInputChange} />
        {/* Select Style */}
        <SelectStyle onUserSelect={onHandlingInputChange} />
        {/* Duration */}
        <SelectDuration onUserSelect={onHandlingInputChange} />
        {/* Create Button */}
        <div className="items-center justify-center flex">
          <Button
            onClick={onCreateClickHandler}
            className="mt-10 bg-violet-700 text-white py-3 rounded-lg font-semibold text-lg hover:bg-violet-800 transition duration-200"
          >
            Create Video
          </Button>
        </div>
        <CustomLoading loading={loading} />
        <button onClick={handleClick}>Download Narration 🎧</button>
      </div>
    </div>
  );
};

export default CreateNew;

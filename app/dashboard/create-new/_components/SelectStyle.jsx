import { useState } from "react";
import Image from "next/image";

export default function StylePicker({ onUserSelect }) {
  // store the selected NAME
  const [selectedName, setSelectedName] = useState("");

  const styleOptions = [
    { name: "Realistic", image: "/realistic.png" },
    { name: "Cartoon", image: "/Cartoon.jpeg" },
    { name: "Ghibli", image: "/Ghibli.jpeg" },
    { name: "Gta", image: "/Gta.jpeg" },
    { name: "Historic", image: "/Historic.jpeg" },
    { name: "Comic", image: "/Comic.png" },
    { name: "Watercolor", image: "/Watercolor.png" },
  ];

  const handleSelect = (item) => {
    setSelectedName(item.name);
    onUserSelect("imageStyle", item.name);
  };

  return (
    <section className="mt-10 px-4 max-w-6xl mx-auto">
      <h2 className="font-bold text-3xl sm:text-4xl text-violet-500">
        Select Style
      </h2>
      <p className="text-gray-500 text-lg sm:text-xl">
        Choose a style among the following
      </p>

      <div className="grid gap-y-12 gap-x-8 mt-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {styleOptions.map((item) => (
          <button
            key={item.name}
            onClick={() => handleSelect(item)}
            className="flex flex-col items-center focus:outline-none"
          >
            <div
              className={`relative h-32 w-32 sm:h-36 sm:w-36 rounded-xl overflow-hidden
                          transition-all duration-200
                          ${
                            selectedName === item.name
                              ? "ring-4 ring-violet-700"
                              : "ring-2 ring-gray-200 hover:ring-violet-400"
                          }
                          hover:scale-105`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 33vw,
                       (max-width: 1024px) 25vw,
                       20vw"
                className="object-cover"
              />
            </div>
            <span className="mt-3 font-medium text-gray-800">{item.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

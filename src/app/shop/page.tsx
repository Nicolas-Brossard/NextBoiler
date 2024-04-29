import React from "react";
import { GlassyCard } from "~/components/custom";
import Image from "next/image";

const galleryJson = [
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1634541167246-6b1c0e1d0e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNTk0NjR8MHwxfGFsbHwxf",
    title: "Life hack",
    description: "How to park your car at your garage?",
  },
];

function page() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-rose-950 to-fuchsia-900 p-0 py-32">
      <div className="px-2">
        <div className="flex flex-row flex-wrap justify-center gap-8">
          <div className="group h-96 w-80 duration-150 ease-out [perspective:1000px] hover:scale-105">
            <div className="relative h-full w-full rounded-2xl shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image
                  className="glass max-h-96 rounded-2xl object-cover"
                  width={320}
                  height={280}
                  src="https://images.unsplash.com/photo-1713204641929-13d89fc98651?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image"
                />
              </div>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black text-center text-white opacity-0 [backface-visibility:hidden] [transform:rotateY(180deg)] group-hover:opacity-50">
                <h1 className="text-3xl font-bold">Jane Doe</h1>
                <h2 className="text-lg">Click to view more</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          {galleryJson.map((item, index) => (
            <GlassyCard
              className="transform-gpu duration-150 ease-in-out hover:scale-105 hover:cursor-pointer"
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
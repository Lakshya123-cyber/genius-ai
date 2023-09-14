"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Lakshya",
    avatar: "L",
    title: "Student",
    description: "This is the best for students!",
  },
  {
    name: "Lakshya",
    avatar: "L",
    title: "Student",
    description: "This is the best for students!",
  },
  {
    name: "Lakshya",
    avatar: "L",
    title: "Student",
    description: "This is the best for students!",
  },
  {
    name: "Lakshya",
    avatar: "L",
    title: "Student",
    description: "This is the best for students!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((i) => (
          <Card
            key={i.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="">
                  <p className="text-lg">{i.name}</p>
                  <p className="text-zinc-400 text-sm">{i.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{i.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

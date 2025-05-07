import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { benefits } from "@/data/benefits";
import React from "react";

export default function Home() {
  return (
      <main>
        <Hero />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 m-5">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              title={benefit.title}
              description={benefit.description}
              image={benefit.image}
            />
          ))}
        </div>
      </main>
  );
}

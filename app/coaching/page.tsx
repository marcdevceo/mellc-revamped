import Button from "@/components/Button";
import Card from "@/components/Card";
import { coachingDesc } from "@/data/coaching-desc";
import React from "react";

export default function Coaching() {
  return (
    <main className="mx-5">
      <header>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-bold text-zinc-900 mb-10">
          What Leadership & Customer Experience Coaching is (and What It is not)
        </h1>
        <p className="text-lg text-center italic text-zinc-900 mb-10">
          When you hear the term “coaching,” you might envision a
          whistle-blowing mentor barking out orders, or perhaps a mysterious
          guru who claims to hold the secrets of success. Spoiler alert: it’s
          neither of those things. Coaching is practical, empowering, and
          grounded in actionable strategies tailored to your unique goals. Let’s
          break it down and clear up some common misconceptions.{" "}
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-5">
        {coachingDesc.map((desc, index) => (
          <Card
            key={index}
            title={desc.title}
            description={desc.description}
            image={desc.image}
          />
        ))}
      </section>
      <section>
        <div className="flex justify-center mb-10">
            <Button 
                button_name="Explore Our Services"
                href="/services"
            />
        </div>
      </section>
    </main>
  );
}

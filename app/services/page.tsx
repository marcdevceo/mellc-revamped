import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import React from "react";

export default function ServicesPage() {
  return (
    <main className="mx-5">
      <header>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-bold text-zinc-900 mb-10">
          What We Offer as Your Partner
        </h1>
        <p className="text-lg text-center italic text-zinc-900 mb-10">
          Partnering with individuals and businesses to elevate leadership
          capabilities and create customer-centric strategies that foster
          loyalty, engagement, and measurable success
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            highlight={service.highlight}
          />
        ))}
      </section>
      <section>
        <div className="flex justify-center mb-10">
          <Button
            button_name="Let’s build your Leadership Legacy"
            href="/contact"
          />
        </div>
      </section>
    </main>
  );
}

/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="">
      <motion.div
        className=" text-zinc-700 text-2xl sm:text-4xl text-center font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Managed Enterprises, LLC</h1>
      </motion.div>
      <motion.p
        className=" text-zinc-700 text-xl text-center font-bold italic"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 25 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.25 }}
      >
        "Together is Just Better!"
      </motion.p>
      <div className="flex flex-col items-center border m-16 bg-black rounded-2xl text-zinc-200 p-5">
        <p className="text-lg text-center mt-4 max-w-2xl">
          Ready to take your leadership to the next level and build a customer
          experience that truly sets you apart? We provide tailored coaching
          programs designed to transform your leaders into impactful
          visionaries, cultivate a customer-centric culture throughout your
          organization, and implement strategies that foster lasting loyalty and
          drive sustainable business growth.{" "}
        </p>
        <Button
            button_name="Get Started Today"
            href="/services"
        />
      </div>
    </div>
  );
}

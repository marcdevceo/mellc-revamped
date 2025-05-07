import Link from "next/link";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-black text-white font-bold p-5 w-full fixed z-10">
      <Link href="/">
        <Image
          src="/mellc_logo.png"
          alt="Managed Enterprises Logo"
          width={100}
          height={100}
          className="h-16 w-16 sm:h-28 sm:w-28 lg:w-40 lg:h-40"
        />
      </Link>
      <div className="text-sm sm:text-lg md:text-xl flex gap-4 sm:gap-8">
        <Link href="/" className="hover:text-yellow-600">
          Home
        </Link>
        <Link href="/Coaching" className="hover:text-yellow-600">
          Coaching
        </Link>
        <Link href="/services" className="hover:text-yellow-600">
          Services
        </Link>
        <Link href="/contact" className="hover:text-yellow-600">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

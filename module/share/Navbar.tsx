import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute z-50 flex p-6 justify-start">
      <Link href={'/'} className="text-4xl text-transparent font-playfair bg-clip-text bg-gradient-to-r from-black to-violet font-bold">
        Storybook
      </Link>
    </nav>
  );
};

export default Navbar;

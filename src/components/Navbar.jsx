import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
      <Image
        src="https://cdn.shopify.com/s/files/1/0829/0680/8560/files/logo.png?v=1777670155"
        alt="Picture of the author"
        width={80}
        height={80}
      />
      <div className="navbar-center hidden md:flex gap-5 font-medium text-lg">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/my-profile">My Profile</Link>
      </div>
      <div className="space-x-2">
        <Link href="#"><Button>Sign in</Button></Link>
        <Link href="#"><Button>Sign up</Button></Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;

"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession()

  console.log(session, "sesssion")

  return (
    <div className="px-4 py-3 shadow relative z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-0">
        <Link href='/' ><Image
          src="https://cdn.shopify.com/s/files/1/0829/0680/8560/files/logo.png?v=1777670155"
          alt="Logo"
          width={80}
          height={80}
          loading="eager"
        /></Link>

        <div className="hidden md:flex gap-5 font-medium text-lg">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/my-profile">My Profile</Link>
        </div>

        <div className="space-x-2 hidden md:flex">
          <Link href="/signin"><Button>Sign in</Button></Link>
          <Link href="/signup"><Button>Sign up</Button></Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu goes down */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 absolute right-0 w-full px-5 text-center bg-white shadow rounded-lg p-4">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link href="/my-profile" onClick={() => setOpen(false)}>My Profile</Link>

          <div className="flex flex-col gap-2">
            <Link href="/signin"><Button className="w-full">Sign in</Button></Link>
            <Link href="/signup"><Button className="w-full">Sign up</Button></Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
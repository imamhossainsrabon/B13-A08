"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";  

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const user = session?.user;

  console.log(session, "sesssion", user);
  const logOut = async()=>{
        await authClient.signOut()
        router.push("/signin");

  }

  return (
    <div className="px-4 py-3 shadow relative z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-0">
        <Link href="/">
          <Image
            src="https://cdn.shopify.com/s/files/1/0829/0680/8560/files/logo.png?v=1777670155"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>

        <div className="hidden md:flex gap-5 font-medium text-lg">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/my-profile">My Profile</Link>
        </div>

        <div className="flex gap-2">
          {!user ? (
          <div className="space-x-2 hidden md:flex">
            <Link href="/signin">
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
                Sign in
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
                Sign up
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex gap-1">
            <Avatar>
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
              />
              <Avatar.Fallback>{user?.name.charAt(1)}</Avatar.Fallback>
            </Avatar>

            <button onClick={logOut} className="px-2 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 active:scale-95 transition">Log Out</button>          
          </div>
        )}

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 absolute right-0 w-full px-5 text-center bg-white shadow rounded-lg p-4">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/products" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/my-profile" onClick={() => setOpen(false)}>
            My Profile
          </Link>

          {!user &&  <div className="flex flex-col gap-2">
            <Link href="/signin">
              <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
                Sign in
              </button>
            </Link>
            <Link href="/signup">
              <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
                Sign up
              </button>
            </Link>
          </div> }
        </div>
      )}
    </div>
  );
};

export default Navbar;

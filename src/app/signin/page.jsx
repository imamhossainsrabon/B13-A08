"use client";

import GoogleSignInButton from "@/components/GoogleSignInButton";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackURL = searchParams.get("callbackURL") || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log({ email, password });
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });
    if (data) {
      console.log(data);
      router.push(callbackURL);
      
    }
    if (error) {
      console.log(error);
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Sign In
        </h1>

        <p className="text-center text-gray-500 mb-6">Welcome back</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
        <p className="mt-5 font-medium text-center flex flex-col">
          Don't have any account ?{" "}
          <Link
            className="bg-red-500 text-white px-3 py-1 mt-5 rounded-full w-max mx-auto"
            href={"/signup"}
          >
            Signup Here
          </Link>
        </p>

        <GoogleSignInButton/>
      </div>
    </div>
  );
}

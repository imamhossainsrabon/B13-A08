
"use client";

import GoogleSignInButton from "@/components/GoogleSignInButton";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";

export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackURL = searchParams.get("callbackURL") || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL,
    });

    if (error) {
      console.log(error);
      return;
    }

    router.push(callbackURL);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Sign In
        </h1>

        <p className="text-center text-gray-500 mb-6">Welcome back</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white"
          >
            Sign In
          </button>
        </form>

        <p className="mt-5 font-medium text-center flex flex-col">
          Do not have any account?
          <Link
            className="bg-red-500 text-white px-3 py-1 mt-5 rounded-full w-max mx-auto"
            href="/signup"
          >
            Signup Here
          </Link>
        </p>

        <GoogleSignInButton />
      </div>
    </div>
  );
}
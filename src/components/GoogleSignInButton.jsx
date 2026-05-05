"use client";

import { authClient } from "@/lib/auth-client";

const GoogleSignInButton = () => {
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/my-profile",
    });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full px-5 mt-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-100 active:scale-95 transition"
    >
      Continue with Google
    </button>
  );
}

export default GoogleSignInButton;
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

const MyProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="max-w-[500px] mx-auto mt-10 p-6 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>

      <div className="space-y-5 text-center text-2xl">
        <Image src={session.user.image} width={1000} height={1000} alt={session.user.name} className="w-20 h-20 object-cover aspect-square mx-auto rounded-full"></Image>
      <p>
        <span className="font-semibold">Name:</span> {session.user.name}
      </p>

      <p>
        <span className="font-semibold">Email:</span> {session.user.email}
      </p>
      </div>
    </div>
  );
};

export default MyProfilePage;
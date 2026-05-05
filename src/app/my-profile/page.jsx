import { auth } from "@/lib/auth";
import { headers } from "next/headers";
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

      <p>
        <span className="font-semibold">Name:</span> {session.user.name}
      </p>

      <p>
        <span className="font-semibold">Email:</span> {session.user.email}
      </p>
    </div>
  );
};

export default MyProfilePage;
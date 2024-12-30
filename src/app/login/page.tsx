import Image from "next/image";
import { auth } from "@/auth";
import { socialLogout, socialLogin } from "@/app/actions";

const HomePage = async () => {
  const session = await auth();

  console.table({ session });

  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-3xl my-2">Welcome, {session?.user?.name}</h1>
      {session?.user?.image && (
        <Image
          alt={"user profile image"}
          className="rounded-full"
          height={72}
          src={session?.user?.image}
          width={72}
        />
      )}
      {!session?.user && (
        <form action={socialLogin}>
          <button
            className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg"
            type="submit"
            name="action"
            value="google"
          >
            Sign In With Google
          </button>
        </form>
      )}
      {session?.user && (
        <form action={socialLogout}>
          <button
            className="bg-blue-400 my-2 text-white p-1 rounded"
            type="submit"
          >
            Logout
          </button>
        </form>
      )}
    </div>
  );
};

export default HomePage;

import Image from "next/image";
import { auth } from "@/auth";
import { socialLogout } from "@/actions";
import { Button } from "@/components";

import { LoginForm } from "./components/LoginForm";

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  return (
    <div className="flex flex-col items-center m-4">
      <div className="grid gap-4 grid-flow-col items-center">
        <h1 className="text-3xl my-2">
          Welcome{session?.user?.name ? `, ${session?.user?.name}` : "!"}
        </h1>
        {session?.user?.image && (
          <Image
            alt="user profile image"
            className="rounded-full"
            height={72}
            src={session?.user?.image}
            width={72}
          />
        )}
      </div>
      {!user && <LoginForm />}
      {user && (
        <>
          <form action={socialLogout}>
            <Button
              aria-label="Logout"
              className="bg-blue-400 my-2 text-white p-1 rounded"
              type="submit"
            >
              Logout
            </Button>
          </form>
        </>
      )}
    </div>
  );
}

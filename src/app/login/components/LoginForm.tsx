"use client";

//import { useActionState } from "react";

import { Button } from "@/components";
import { socialLogin } from "@/actions";

export const LoginForm = () => {
  return (
    <form action={socialLogin}>
      <Button
        className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg"
        name="action"
        type="submit"
        value="google"
      >
        Sign In With Google
      </Button>
    </form>
  );
};

import { Button } from "@/components";
import { socialLogin } from "@/actions";

export const LoginForm = () => {
  return (
    <form action={socialLogin}>
      <Button
        className="bg-sky-700 p-8 m-1"
        name="action"
        type="submit"
        value="google"
      >
        Sign in with Google
      </Button>
    </form>
  );
};

import { Button } from "@/components";
import { socialLogin } from "@/actions";

export const LoginForm = () => {
  return (
    <form action={socialLogin}>
      <Button
        className="bg-sky-700 text-white p-8 rounded-md m-1 text-lg"
        name="action"
        type="submit"
        value="google"
      >
        Sign in with Google
      </Button>
    </form>
  );
};

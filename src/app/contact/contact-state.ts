export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialContactState: ContactState = { status: "idle", message: "" };

"use client";

import { useActionState, useEffect, useRef } from "react";
import { Button } from "@/components";
import { sendContactMessage } from "./actions";
import { initialContactState } from "./contact-state";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialContactState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="grid gap-4 w-full max-w-lg">
      <label className="grid gap-2">
        Name
        <input name="name" autoComplete="name" maxLength={100} required />
      </label>
      <label className="grid gap-2">
        Email
        <input name="email" type="email" autoComplete="email" maxLength={254} required />
      </label>
      <label className="grid gap-2">
        Message
        <textarea name="message" rows={7} maxLength={5000} required
          className="w-full rounded-md bg-neutral-900 p-3 text-white" />
      </label>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <Button type="submit" disabled={pending}>{pending ? "Sending..." : "Send message"}</Button>
      {state.message && (
        <p role={state.status === "error" ? "alert" : "status"}>{state.message}</p>
      )}
    </form>
  );
}

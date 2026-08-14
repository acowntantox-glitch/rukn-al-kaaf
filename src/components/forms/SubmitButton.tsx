"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-fit items-center justify-center gap-2 rounded-md bg-navy-900 px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900 disabled:opacity-60"
    >
      {pending ? "Submitting..." : children}
    </button>
  );
}

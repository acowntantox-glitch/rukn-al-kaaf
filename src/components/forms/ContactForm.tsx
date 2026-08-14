"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactMessage } from "@/app/actions";
import { idleFormState } from "@/lib/form-state";
import { Field, inputClasses } from "@/components/forms/Field";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { CheckIcon } from "@/components/icons";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactMessage, idleFormState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-8">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckIcon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-navy-900">Message Sent</h3>
        <p className="text-sm leading-relaxed text-slate-600">{state.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="contact-name" required error={state.errors?.name}>
          <input id="contact-name" name="name" type="text" className={inputClasses} />
        </Field>
        <Field label="Company" htmlFor="contact-company" error={state.errors?.company}>
          <input id="contact-company" name="company" type="text" className={inputClasses} />
        </Field>
        <Field label="Email" htmlFor="contact-email" required error={state.errors?.email}>
          <input id="contact-email" name="email" type="email" className={inputClasses} />
        </Field>
        <Field label="Phone" htmlFor="contact-phone" error={state.errors?.phone}>
          <input id="contact-phone" name="phone" type="tel" className={inputClasses} />
        </Field>
      </div>
      <Field label="Message" htmlFor="contact-message" required error={state.errors?.message}>
        <textarea id="contact-message" name="message" rows={5} className={inputClasses} />
      </Field>

      {state.status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          {state.message}
        </p>
      ) : null}

      <SubmitButton>Send Message</SubmitButton>
    </form>
  );
}

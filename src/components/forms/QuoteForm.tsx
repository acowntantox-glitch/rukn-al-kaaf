"use client";

import { useActionState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { submitQuoteRequest } from "@/app/actions";
import { idleFormState } from "@/lib/form-state";
import { Field, inputClasses } from "@/components/forms/Field";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { CheckIcon } from "@/components/icons";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export function QuoteForm() {
  const [state, formAction] = useActionState(submitQuoteRequest, idleFormState);
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get("product") ?? "";

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
        <h3 className="text-lg font-semibold text-navy-900">Enquiry Received</h3>
        <p className="text-sm leading-relaxed text-slate-600">{state.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="quote-name" required error={state.errors?.name}>
          <input id="quote-name" name="name" type="text" className={inputClasses} />
        </Field>
        <Field label="Company Name" htmlFor="quote-company" error={state.errors?.company}>
          <input id="quote-company" name="company" type="text" className={inputClasses} />
        </Field>
        <Field label="Email" htmlFor="quote-email" required error={state.errors?.email}>
          <input id="quote-email" name="email" type="email" className={inputClasses} />
        </Field>
        <Field label="Phone" htmlFor="quote-phone" required error={state.errors?.phone}>
          <input id="quote-phone" name="phone" type="tel" className={inputClasses} />
        </Field>
        <Field label="Product" htmlFor="quote-product" required error={state.errors?.product}>
          <select
            id="quote-product"
            name="product"
            defaultValue={preselectedProduct}
            className={inputClasses}
          >
            <option value="">Select a product</option>
            {categories.map((category) => (
              <optgroup key={category.slug} label={category.name}>
                {products
                  .filter((product) => product.categorySlug === category.slug)
                  .map((product) => (
                    <option key={product.slug} value={product.slug}>
                      {product.name}
                    </option>
                  ))}
              </optgroup>
            ))}
            <option value="other">Other / Not Listed</option>
          </select>
        </Field>
        <Field label="Quantity" htmlFor="quote-quantity" error={state.errors?.quantity}>
          <input
            id="quote-quantity"
            name="quantity"
            type="text"
            placeholder="e.g. 500 units"
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="Message" htmlFor="quote-message" required error={state.errors?.message}>
        <textarea
          id="quote-message"
          name="message"
          rows={5}
          placeholder="Tell us about your requirement..."
          className={inputClasses}
        />
      </Field>

      {state.status === "error" ? (
        <p className="text-sm text-red-600" role="alert">
          {state.message}
        </p>
      ) : null}

      <SubmitButton>Submit Enquiry</SubmitButton>
    </form>
  );
}

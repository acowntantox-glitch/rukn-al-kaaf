import type { FormState } from "@/lib/form-state";

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactMessage(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = getString(formData, "name");
  const email = getString(formData, "email");
  const message = getString(formData, "message");

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required.";
  if (!email) errors.email = "Email is required.";
  if (!message) errors.message = "Message is required.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fill in the required fields.", errors };
  }

  const submission = {
    type: "contact" as const,
    name,
    company: getString(formData, "company"),
    email,
    phone: getString(formData, "phone"),
    message,
    submittedAt: new Date().toISOString(),
  };

  // TODO: connect to a transactional email service (e.g. Resend) here —
  // send a notification to the company inbox and a confirmation to the
  // customer. The form UI does not need to change when this is wired up.
  console.log("Contact form submission:", submission);

  return {
    status: "success",
    message: "Thank you for reaching out. Our team will get back to you shortly.",
  };
}

export async function submitQuoteRequest(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = getString(formData, "name");
  const email = getString(formData, "email");
  const phone = getString(formData, "phone");
  const product = getString(formData, "product");
  const message = getString(formData, "message");

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Full name is required.";
  if (!email) errors.email = "Email is required.";
  if (!phone) errors.phone = "Phone is required.";
  if (!product) errors.product = "Please select a product.";
  if (!message) errors.message = "Please describe your requirement.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fill in the required fields.", errors };
  }

  const submission = {
    type: "quote" as const,
    name,
    company: getString(formData, "company"),
    email,
    phone,
    product,
    quantity: getString(formData, "quantity"),
    message,
    submittedAt: new Date().toISOString(),
  };

  // TODO: connect to a transactional email service (e.g. Resend) here —
  // send the enquiry to the sales inbox and a confirmation to the customer.
  // The form UI does not need to change when this is wired up.
  console.log("Quote request submission:", submission);

  return {
    status: "success",
    message:
      "Thank you for your enquiry. Our team will review your requirements and contact you shortly.",
  };
}

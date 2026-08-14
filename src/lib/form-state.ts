export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string>;
};

export const idleFormState: FormState = { status: "idle", message: "" };

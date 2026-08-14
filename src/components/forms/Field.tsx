import type { ReactNode } from "react";

type FieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
};

export function Field({ label, htmlFor, required, error, children, className = "" }: FieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-navy-900">
        {label} {required ? <span className="text-blue-700">*</span> : null}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const inputClasses =
  "w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-slate-400 outline-none transition-colors focus:border-navy-900 focus:ring-1 focus:ring-navy-900";

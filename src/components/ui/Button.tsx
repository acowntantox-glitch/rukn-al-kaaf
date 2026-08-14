import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline-light" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-800 focus-visible:outline-navy-900",
  secondary:
    "bg-white text-navy-900 border border-slate-200 hover:border-navy-900 focus-visible:outline-navy-900",
  "outline-light":
    "bg-transparent text-white border border-white/40 hover:bg-white/10 focus-visible:outline-white",
  ghost: "bg-transparent text-navy-900 hover:bg-blue-100 focus-visible:outline-navy-900",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  const {
    onClick,
    disabled,
    name,
    form,
    value,
    "aria-label": ariaLabel,
    type = "button",
  } = buttonProps;
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      name={name}
      form={form}
      value={value}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

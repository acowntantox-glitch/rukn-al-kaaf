import Image from "next/image";
import Link from "next/link";
import logoImage from "@/assets/logo-rukn.png";

type LogoImageProps = {
  className?: string;
  priority?: boolean;
};

// Official Rukn Al Kaaf logo file (src/assets/logo-rukn.png). Do not redraw
// or recolor — swap the source file directly if a new version is supplied.
export function LogoImage({ className = "h-32 w-auto", priority }: LogoImageProps) {
  return (
    <Image
      src={logoImage}
      alt="Rukn Al Kaaf General Trading"
      className={className}
      priority={priority}
    />
  );
}

type LogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function Logo({ className = "", imageClassName = "h-32 w-auto", priority }: LogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Rukn Al Kaaf General Trading — Home"
    >
      <LogoImage className={imageClassName} priority={priority} />
    </Link>
  );
}

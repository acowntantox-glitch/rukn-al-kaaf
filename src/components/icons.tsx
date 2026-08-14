import type { SVGProps } from "react";
import type { IconName } from "@/data/types";

type IconProps = SVGProps<SVGSVGElement>;

function base(children: React.ReactNode, props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function PackageIcon(props: IconProps) {
  return base(
    <>
      <path d="M21 8 12 3 3 8v8l9 5 9-5V8Z" />
      <path d="M3 8l9 5 9-5" />
      <path d="M12 13v8" />
    </>,
    props
  );
}

export function BuildingIcon(props: IconProps) {
  return base(
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h.01M12 8h.01M15 8h.01M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01" />
    </>,
    props
  );
}

export function CogIcon(props: IconProps) {
  return base(
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.55 1.55M17.55 17.55 19.1 19.1M3 12h2.2M18.8 12H21M4.9 19.1l1.55-1.55M17.55 6.45 19.1 4.9" />
    </>,
    props
  );
}

export function CubeIcon(props: IconProps) {
  return base(
    <>
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
      <path d="M3 7l9 5 9-5M12 12v10" />
    </>,
    props
  );
}

export function ChipIcon(props: IconProps) {
  return base(
    <>
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" />
    </>,
    props
  );
}

export function HomeIcon(props: IconProps) {
  return base(
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9" />
    </>,
    props
  );
}

export function GlobeIcon(props: IconProps) {
  return base(
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.2 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.2-3.5-8.5S9.7 5.8 12 3.5Z" />
    </>,
    props
  );
}

export function TruckIcon(props: IconProps) {
  return base(
    <>
      <rect x="2.5" y="7" width="12" height="9" rx="1" />
      <path d="M14.5 10h3.6L21 13v3h-6.5" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </>,
    props
  );
}

export function HandshakeIcon(props: IconProps) {
  return base(
    <>
      <path d="M3 11l4-3 3 2 3-2 2 1.5" />
      <path d="M3 11v4l4 3 3-2 3 2 4-3.2M15 9.5l3-2 3 2v4l-3 2" />
    </>,
    props
  );
}

export function SearchIcon(props: IconProps) {
  return base(
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.3-4.3" />
    </>,
    props
  );
}

export function ShieldIcon(props: IconProps) {
  return base(
    <>
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8L15 10" />
    </>,
    props
  );
}

const iconMap: Record<IconName, (props: IconProps) => React.ReactElement> = {
  package: PackageIcon,
  building: BuildingIcon,
  cog: CogIcon,
  cube: CubeIcon,
  chip: ChipIcon,
  home: HomeIcon,
  globe: GlobeIcon,
  truck: TruckIcon,
  handshake: HandshakeIcon,
  search: SearchIcon,
  shield: ShieldIcon,
};

export function Icon({ name, ...props }: { name: IconName } & IconProps) {
  const Component = iconMap[name];
  return <Component {...props} />;
}

export function MenuIcon(props: IconProps) {
  return base(<path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />, props);
}

export function CloseIcon(props: IconProps) {
  return base(<path d="M5 5l14 14M19 5 5 19" />, props);
}

export function ChevronRightIcon(props: IconProps) {
  return base(<path d="m9 5 7 7-7 7" />, props);
}

export function ArrowRightIcon(props: IconProps) {
  return base(<path d="M4 12h15.5M13 5.5l6.5 6.5-6.5 6.5" />, props);
}

export function PhoneIcon(props: IconProps) {
  return base(
    <path d="M6.5 3.5h3L11 8l-2 1.5a11 11 0 0 0 5.5 5.5L16 13l4.5 1.5v3a2 2 0 0 1-2.2 2C10.8 19 5 13.2 4.5 5.7A2 2 0 0 1 6.5 3.5Z" />,
    props
  );
}

export function MailIcon(props: IconProps) {
  return base(
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </>,
    props
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.9 9.9 0 0 0 4.62 1.14h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.78.83-3.04-.2-.31a8.16 8.16 0 0 1-1.27-4.4c0-4.52 3.68-8.2 8.26-8.2 2.2 0 4.27.86 5.83 2.42a8.14 8.14 0 0 1 2.41 5.79c0 4.52-3.68 8.29-8.24 8.29Zm4.52-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.16 0-.43.06-.66.31s-.87.85-.87 2.08.89 2.41 1.02 2.58c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return base(
    <>
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </>,
    props
  );
}

export function ClockIcon(props: IconProps) {
  return base(
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>,
    props
  );
}

export function CheckIcon(props: IconProps) {
  return base(<path d="m5 12.5 4.5 4.5L19 7" />, props);
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 8.5H3.56V20.4h3.38V8.5ZM5.25 3.1a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20.4h-3.37v-6.24c0-1.49-.03-3.4-2.07-3.4-2.08 0-2.4 1.62-2.4 3.3v6.34H9.24V8.5h3.24v1.63h.05c.45-.85 1.56-1.75 3.21-1.75 3.43 0 4.7 2.34 4.7 5.72v6.3Z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return base(
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M16.9 7.1h.01" />
    </>,
    props
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46c-.27-.04-1.2-.12-2.29-.12-2.26 0-3.81 1.38-3.81 3.91v2.19H7.98v2.96h2.46V21h3.06Z" />
    </svg>
  );
}

export function UploadIcon(props: IconProps) {
  return base(
    <>
      <path d="M12 15V4M8 8l4-4 4 4" />
      <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </>,
    props
  );
}

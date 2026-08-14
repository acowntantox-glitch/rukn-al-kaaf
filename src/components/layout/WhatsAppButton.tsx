import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

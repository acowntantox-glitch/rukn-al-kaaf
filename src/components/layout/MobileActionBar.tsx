import { PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/data/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-slate-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] sm:hidden">
      <a
        href={siteConfig.contact.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 bg-navy-900 py-4 text-sm font-semibold text-white active:bg-navy-800"
      >
        <PhoneIcon className="h-4 w-4" />
        Call Now
      </a>
      <a
        href={siteConfig.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-4 text-sm font-semibold text-white active:bg-[#1ebd5a]"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}

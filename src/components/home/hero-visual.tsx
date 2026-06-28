import Image from "next/image";
import { heroImages } from "@/data/media";
import type { Locale } from "@/lib/locale";

export function HeroVisual({ locale }: { locale: Locale }) {
  const isBg = locale === "bg";

  return (
    <div className="relative mx-auto w-full max-w-[39rem] pt-4 sm:pt-6 lg:pt-2">
      <div className="absolute inset-x-10 top-8 -z-10 h-[20rem] rounded-[3rem] bg-[radial-gradient(circle_at_top,_rgba(28,181,163,0.22),_transparent_58%),linear-gradient(180deg,_rgba(255,255,255,0.92),_rgba(255,255,255,0.3))] blur-3xl sm:h-[24rem]" />
      <div className="absolute -right-10 top-20 -z-10 h-24 w-24 rounded-full bg-[rgba(233,162,59,0.18)] blur-3xl sm:h-32 sm:w-32" />

      <div className="relative overflow-hidden rounded-[2.75rem] border border-[rgba(16,42,67,0.08)] bg-white/76 p-3 shadow-[0_34px_90px_rgba(16,42,67,0.12)] backdrop-blur-xl sm:p-4">
        <div className="relative overflow-hidden rounded-[2.25rem]">
          <Image
            src={heroImages.cleaner}
            alt={
              isBg
                ? "Професионалист по почистване в светъл и подреден интериор"
                : "Cleaning professional in a bright, orderly interior"
            }
            fetchPriority="high"
            className="h-[24rem] w-full object-cover object-center sm:h-[30rem] lg:h-[35rem]"
            sizes="(max-width: 1024px) 100vw, 44rem"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(16,42,67,0.02)_0%,_rgba(16,42,67,0.02)_44%,_rgba(16,42,67,0.34)_100%)]" />
        </div>

        <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/82 px-3 py-2 text-[0.64rem] font-bold tracking-[0.16em] text-navy uppercase shadow-[0_12px_30px_rgba(16,42,67,0.12)] backdrop-blur sm:left-8 sm:top-8 sm:px-4 sm:text-[0.72rem]">
          {isBg ? "Домове и офиси" : "Homes and offices"}
        </div>

        <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-white/55 bg-white/88 p-4 shadow-[0_20px_48px_rgba(16,42,67,0.18)] backdrop-blur sm:bottom-8 sm:left-8 sm:right-auto sm:w-[18rem] sm:rounded-[1.75rem] sm:p-5">
          <div className="text-[0.64rem] font-bold tracking-[0.16em] text-turquoise uppercase sm:text-[0.72rem]">
            {isBg ? "Ясна организация" : "Clear coordination"}
          </div>
          <p className="mt-2 text-sm leading-6 text-muted sm:mt-3">
            {isBg
              ? "Подготвени екипи, удобни часове и спокоен стандарт на работа от първия контакт."
              : "Prepared teams, convenient scheduling, and a calm service standard from the first contact."}
          </p>
        </div>
      </div>
    </div>
  );
}

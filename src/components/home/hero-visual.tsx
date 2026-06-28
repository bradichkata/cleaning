import Image from "next/image";
import { heroImages } from "@/data/media";
import type { Locale } from "@/lib/locale";

export function HeroVisual({ locale }: { locale: Locale }) {
  const isBg = locale === "bg";

  return (
    <div className="relative mx-auto w-full max-w-[42rem] pt-2 sm:pt-4">
      <div className="absolute inset-x-8 top-10 -z-10 h-[18rem] rounded-[2rem] bg-[linear-gradient(180deg,rgba(29,125,112,0.22),rgba(29,125,112,0.04))] blur-2xl sm:h-[22rem]" />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-[rgba(21,45,62,0.14)] bg-[rgba(255,250,244,0.72)] p-3 shadow-[0_28px_70px_rgba(15,31,42,0.14)] backdrop-blur-xl sm:p-4">
        <div className="relative overflow-hidden rounded-[1.4rem]">
          <div className="relative h-[24rem] sm:h-[30rem] lg:h-[35rem]">
            <Image
              src={heroImages.cleaner}
              alt={
                isBg
                  ? "Професионалист по почистване в светъл и подреден интериор"
                  : "Cleaning professional in a bright, orderly interior"
              }
              fetchPriority="high"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 44rem"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(21,45,62,0.03)_0%,_rgba(21,45,62,0.02)_48%,_rgba(21,45,62,0.42)_100%)]" />
          </div>
        </div>

        <div className="absolute left-4 top-4 rounded-[0.9rem] border border-white/70 bg-[rgba(255,251,247,0.88)] px-3 py-2 text-[0.68rem] font-bold tracking-[0.1em] text-navy uppercase shadow-[0_10px_24px_rgba(15,31,42,0.12)] sm:left-8 sm:top-8 sm:px-4 sm:text-[0.72rem]">
          {isBg ? "Домове и офиси в Дъблин" : "Dublin homes and offices"}
        </div>

        <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/60 bg-[rgba(255,251,247,0.9)] p-4 shadow-[0_16px_40px_rgba(15,31,42,0.18)] sm:bottom-8 sm:left-8 sm:right-auto sm:w-[18.5rem] sm:p-5">
          <div className="text-[0.68rem] font-bold tracking-[0.1em] text-turquoise uppercase sm:text-[0.72rem]">
            {isBg ? "Надеждни посещения" : "Reliable visits"}
          </div>
          <p className="mt-2 text-sm leading-6 text-muted sm:mt-3">
            {isBg
              ? "Подготвени екипи, ясна комуникация и спокоен стандарт на работа от първия контакт."
              : "Prepared teams, clear communication, and checklist-led finishing from the first message through the final handoff."}
          </p>
        </div>
      </div>
    </div>
  );
}

import { pickLocale, type Locale } from "@/lib/locale";

export const company = {
  brandName: "Harbor & Pine Cleaning",
  brandMark: "HP",
  legalName: "Harbor & Pine Home Services Ltd.",
  phoneDisplay: "+353 1 687 2480",
  phoneHref: "tel:+35316872480",
  email: "hello@harborpinecleaning.ie",
  whatsappHref:
    "https://wa.me/353868412480?text=Hello%20Harbor%20%26%20Pine%20Cleaning%2C%20I%20would%20like%20a%20quote.",
  address: "14 Willow Quay, Ringsend, Dublin 4, D04 HX32",
  registration: "Company No. 721548 | VAT IE4027154H",
  serviceAreas: [
    "Dublin City Centre",
    "Ranelagh & Rathmines",
    "Blackrock & Dun Laoghaire",
  ],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  socialProfiles: [
    { label: "Instagram", href: "https://instagram.com/harborpinecleaning" },
    { label: "LinkedIn", href: "https://linkedin.com/company/harbor-pine-cleaning" },
  ] as Array<{ label: string; href: string }>,
};

export function getCompanyContent(locale: Locale) {
  return {
    tagline: pickLocale(locale, {
      en: "Reliable cleaning for busy homes, rentals, and small teams",
      bg: "Професионално почистване без излишен стрес",
    }),
    description: pickLocale(locale, {
      en: "Residential, rental, and office cleaning across Dublin with careful teams, clear pricing, and dependable appointment windows.",
      bg: "Надеждно почистване за домове и офиси с обучени професионалисти, прозрачни цени и гъвкави посещения.",
    }),
    quotePromise: pickLocale(locale, {
      en: "Every estimate is a guided range in EUR. Final pricing is confirmed after we review scope, access, parking, and property condition.",
      bg: "Всяка оценка е ориентировъчен диапазон. Крайната цена се потвърждава след преглед на достъпа, състоянието и точния обхват.",
    }),
    openingHours: pickLocale(locale, {
      en: [
        "Monday to Friday: 07:30 - 18:30",
        "Saturday: 08:30 - 15:00",
        "Sunday: By request for move-out and commercial work",
      ],
      bg: [
        "Понеделник до петък: 08:00 - 19:00",
        "Събота: 09:00 - 15:00",
        "Неделя: Само спешни и предварително планирани посещения",
      ],
    }),
    serviceAreasLabel: pickLocale(locale, {
      en: "Service areas",
      bg: "Обслужвани райони",
    }),
    footerPlaceholderNote: pickLocale(locale, {
      en: "Quotes are reviewed by a real coordinator before any appointment is confirmed.",
      bg: "Демо идентичността и текстовете по политиките са временни, докато бъдат заменени с реалните фирмени данни.",
    }),
  };
}

export function getTrustHighlights(locale: Locale) {
  return pickLocale(locale, {
    en: [
      "Fully insured residential and office teams",
      "24-hour quote reply target on weekdays",
      "Key-safe and managed-building access protocols",
      "Eco products available on request",
    ],
    bg: [
      "Застрахован екип за почистване",
      "Проверени професионалисти",
      "Налични еко продукти",
      "Политика за удовлетвореност",
    ],
  });
}

export function getHomeStats(locale: Locale) {
  return pickLocale(locale, {
    en: [
      { value: "4.9/5", label: "Average customer review score" },
      { value: "24h", label: "weekday quote reply target" },
      { value: "127", label: "Jobs completed in spring 2026" },
    ],
    bg: [
      { value: "24ч", label: "обичаен срок за отговор по запитване" },
      { value: "8", label: "основни линии услуги" },
      { value: "1", label: "ясен процес за оферта" },
    ],
  });
}

export function getWhyChooseUs(locale: Locale) {
  return pickLocale(locale, {
    en: [
      "We quote with service notes, access details, and realistic ranges instead of vague promises that unravel later.",
      "Each visit follows a practical checklist so standards stay consistent whether the job is a one-off reset or a weekly office clean.",
      "Arrival windows, parking constraints, and key handoff details are confirmed before dispatch so customers are not left guessing.",
      "The business is structured for repeatability: calm communication, tidy handoffs, and clear follow-up when a visit needs adjustment.",
    ],
    bg: [
      "Обучени и проверени почистващи специалисти, които следват реални чеклисти, а не общи обещания.",
      "Прозрачни ценови диапазони с бележки по обхвата, а не изкуствена точност, която после се разминава.",
      "Часови прозорци, достъп и паркиране се уточняват преди изпращане на екипа.",
      "Бърза комуникация при промяна на график, повторни посещения и огледи.",
    ],
  });
}

export function getProcessSteps(locale: Locale) {
  return pickLocale(locale, {
    en: [
      {
        title: "Select the service",
        text: "Start with the cleaning type, property size, and location so we can frame the right scope fast.",
      },
      {
        title: "Receive a realistic estimate",
        text: "We calculate a guided range and flag where condition, access, or extras may change the final quote.",
      },
      {
        title: "Confirm the appointment",
        text: "A real person reviews the request, confirms the scope, and locks in the service window.",
      },
      {
        title: "Inspect and enjoy the result",
        text: "We finish against a checklist, note follow-ups if needed, and keep the handoff clear.",
      },
    ],
    bg: [
      {
        title: "Изберете услуга",
        text: "Започнете с вида почистване, размера на имота и локацията, за да определим правилния обхват.",
      },
      {
        title: "Получете реалистична оценка",
        text: "Изчисляваме ориентировъчен диапазон и отбелязваме къде състоянието, достъпът или екстрите могат да променят крайната оферта.",
      },
      {
        title: "Потвърдете посещението",
        text: "Реален човек преглежда заявката, потвърждава обхвата и фиксира подходящ часови прозорец.",
      },
      {
        title: "Проверете и се насладете на резултата",
        text: "Работим по чеклист, отбелязваме последващи действия при нужда и правим предаването ясно.",
      },
    ],
  });
}

export function getPricingPrinciples(locale: Locale) {
  return pickLocale(locale, {
    en: [
      "Regular cleaning gives the best value when access, frequency, and room priorities stay consistent from visit to visit.",
      "Deep, move-out, and post-construction work are quoted more cautiously because condition and access vary sharply from one property to another.",
      "Window, carpet, and upholstery work are priced as add-on scopes or stand-alone quotations depending on layout, material, and drying requirements.",
    ],
    bg: [
      "Редовното почистване работи най-добре при повтарящи се посещения и постоянен достъп до имота.",
      "Основното, следремонтното и изходното почистване се оферират по-внимателно, защото състоянието варира силно.",
      "Почистването на прозорци, килими и мека мебел често се цени като допълнителен обхват или индивидуална оферта.",
    ],
  });
}

export function getReviewProtocol(locale: Locale) {
  return pickLocale(locale, {
    en: [
      "Customers most often mention punctual arrivals, careful finishing, and how smoothly access details were handled.",
      "Service type and general location help new customers judge whether the feedback matches their own property.",
      "A mix of Google reviews, direct email feedback, and repeat-customer follow-up gives the clearest picture of service quality.",
    ],
    bg: [
      "При пускане трябва да се публикуват само потвърдени отзиви.",
      "Всеки отзив е добре да включва типа услуга и общата локация, когато е възможно.",
      "Този прототип държи секцията готова, без да измисля препоръки.",
    ],
  });
}

export function getCommercialCapabilities(locale: Locale) {
  return pickLocale(locale, {
    en: [
      "Office suites and meeting rooms",
      "Reception, breakout, and shared client spaces",
      "Washrooms, kitchenettes, and touch points",
      "Early-morning and after-hours visit windows",
      "Consumables checks and issue reporting",
    ],
    bg: [
      "Офисни помещения и заседателни зали",
      "Рецепции и споделени пространства",
      "Санитарни помещения и кухни",
      "Рутинни графици извън работно време",
      "Отчитане на консумативи и отбелязване на проблеми",
    ],
  });
}

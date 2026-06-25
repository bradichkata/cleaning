import { pickLocale, type Locale } from "@/lib/locale";

export const company = {
  brandName: "Northline Cleaning Co.",
  legalName: "Northline Cleaning Co. Ltd. (demo placeholder)",
  phoneDisplay: "+359 88 000 0000",
  phoneHref: "tel:+359880000000",
  email: "hello@northline-cleaning.example",
  whatsappHref:
    "https://wa.me/359880000000?text=Hello%20Northline%20Cleaning%2C%20I%20would%20like%20a%20quote.",
  address: "Sofia, Bulgaria (replace with real business address before launch)",
  registration: "Registration details to be replaced before launch",
  serviceAreas: ["Sofia", "Plovdiv", "Pernik", "Business districts on request"],
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  socialProfiles: [] as Array<{ label: string; href: string }>,
};

export function getCompanyContent(locale: Locale) {
  return {
    tagline: pickLocale(locale, {
      en: "Professional cleaning without the stress",
      bg: "Професионално почистване без излишен стрес",
    }),
    description: pickLocale(locale, {
      en: "Reliable home and office cleaning with trained professionals, transparent pricing, and flexible appointments.",
      bg: "Надеждно почистване за домове и офиси с обучени професионалисти, прозрачни цени и гъвкави посещения.",
    }),
    quotePromise: pickLocale(locale, {
      en: "Every estimate is a guided range. Final pricing is confirmed after we review access, condition, and the exact scope.",
      bg: "Всяка оценка е ориентировъчен диапазон. Крайната цена се потвърждава след преглед на достъпа, състоянието и точния обхват.",
    }),
    openingHours: pickLocale(locale, {
      en: [
        "Monday to Friday: 08:00 - 19:00",
        "Saturday: 09:00 - 15:00",
        "Sunday: Emergency and pre-booked work only",
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
      en: "Demo identity and policy text are placeholders until replaced with the real business details.",
      bg: "Демо идентичността и текстовете по политиките са временни, докато бъдат заменени с реалните фирмени данни.",
    }),
  };
}

export function getTrustHighlights(locale: Locale) {
  return pickLocale(locale, {
    en: [
      "Insured cleaning team",
      "Background-checked professionals",
      "Eco-friendly products available",
      "Satisfaction policy",
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
      { value: "24h", label: "typical quote reply window" },
      { value: "8", label: "core cleaning service lines" },
      { value: "1", label: "clear estimate workflow" },
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
      "Trained and vetted cleaners who follow service checklists instead of vague promises.",
      "Transparent estimate ranges with scope notes, not artificial precision that breaks later.",
      "Arrival windows, access planning, and parking notes captured before the team is dispatched.",
      "Responsive support for schedule changes, repeat visits, and inspection bookings.",
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
      "Regular cleaning works best with recurring visits and consistent property access.",
      "Deep, move-out, and post-construction jobs are quoted with more caution because condition varies heavily.",
      "Window, carpet, and upholstery work are often priced as add-on scopes or custom quotations.",
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
      "Only verified reviews should be published on launch.",
      "Each review should include the service type and general location when possible.",
      "This prototype keeps the review layout ready without inventing testimonials.",
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
      "Reception and shared spaces",
      "Washrooms and kitchenettes",
      "After-hours routine schedules",
      "Consumables reporting and issue flags",
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

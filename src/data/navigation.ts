import { pickLocale, type Locale } from "@/lib/locale";

export function getMainNavigation(locale: Locale) {
  return pickLocale(locale, {
    en: [
      { label: "Services", href: "/services" },
      { label: "Prices", href: "/prices" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Service Areas", href: "/service-areas" },
      { label: "About Us", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Contact", href: "/contact" },
    ],
    bg: [
      { label: "Услуги", href: "/services" },
      { label: "Цени", href: "/prices" },
      { label: "Как работи", href: "/how-it-works" },
      { label: "Райони", href: "/service-areas" },
      { label: "За нас", href: "/about" },
      { label: "Отзиви", href: "/reviews" },
      { label: "Контакт", href: "/contact" },
    ],
  });
}

export function getFooterNavigation(locale: Locale) {
  return pickLocale(locale, {
    en: [
      {
        title: "Services",
        links: [
          { label: "Regular home cleaning", href: "/services/regular-home-cleaning" },
          { label: "Deep cleaning", href: "/services/deep-cleaning" },
          { label: "Office cleaning", href: "/services/office-cleaning" },
          { label: "End-of-tenancy cleaning", href: "/services/end-of-tenancy-cleaning" },
        ],
      },
      {
        title: "Plan & Book",
        links: [
          { label: "Prices", href: "/prices" },
          { label: "Get a quote", href: "/get-a-quote" },
          { label: "Request inspection", href: "/book" },
          { label: "How it works", href: "/how-it-works" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Service areas", href: "/service-areas" },
          { label: "Before & after", href: "/before-after" },
          { label: "Commercial cleaning", href: "/commercial-cleaning" },
          { label: "FAQ", href: "/faq" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        title: "Policies",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Cookies", href: "/cookies" },
          { label: "Terms", href: "/terms" },
          { label: "Cancellation policy", href: "/cancellation-policy" },
          { label: "Satisfaction guarantee", href: "/satisfaction-guarantee" },
        ],
      },
    ],
    bg: [
      {
        title: "Услуги",
        links: [
          { label: "Редовно домашно почистване", href: "/services/regular-home-cleaning" },
          { label: "Основно почистване", href: "/services/deep-cleaning" },
          { label: "Почистване на офиси", href: "/services/office-cleaning" },
          { label: "Почистване при изнасяне", href: "/services/end-of-tenancy-cleaning" },
        ],
      },
      {
        title: "Планиране",
        links: [
          { label: "Цени", href: "/prices" },
          { label: "Поискай оферта", href: "/get-a-quote" },
          { label: "Поискай оглед", href: "/book" },
          { label: "Как работи", href: "/how-it-works" },
        ],
      },
      {
        title: "Компания",
        links: [
          { label: "За нас", href: "/about" },
          { label: "Райони", href: "/service-areas" },
          { label: "Преди и след", href: "/before-after" },
          { label: "Търговско почистване", href: "/commercial-cleaning" },
          { label: "ЧЗВ", href: "/faq" },
          { label: "Блог", href: "/blog" },
        ],
      },
      {
        title: "Политики",
        links: [
          { label: "Поверителност", href: "/privacy" },
          { label: "Бисквитки", href: "/cookies" },
          { label: "Условия", href: "/terms" },
          { label: "Отказ и пренасрочване", href: "/cancellation-policy" },
          { label: "Гаранция за удовлетвореност", href: "/satisfaction-guarantee" },
        ],
      },
    ],
  });
}

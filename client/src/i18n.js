import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: {
    en: {
      translation: {
        page_not_found: "404: Page not found!",
        header: "EXPLORE YOUR NEXT MOVIES AND TV SHOWS",
        back_to_list: "Back to List",
        read_more: "Read more",
        not_found: "Not found",
        contact_us: "Contact us",
        email_support: "support@nextmovies.com",
        opening_time: "Mon – Fri | 6:00am – 5:00 pm PT",
      },
    },
  },
});

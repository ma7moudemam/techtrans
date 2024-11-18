

import en from "../locales/en.json";
import ar from "../locales/ar.json";
import { createI18n } from "vue-i18n";

const messages = {
    en,
    ar,
  };
  

  const i18n = createI18n({
    locale: "ar", // Default locale
    fallbackLocale: "en", // Fallback locale if translation not found
    messages,
  });
  
  export default i18n;
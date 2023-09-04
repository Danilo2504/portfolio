"use client";
import { useCallback } from "react";
import en from "../../../public/locales/en/common.json";
import es from "../../../public/locales/es/common.json";
import { useLocale } from "../Contexts/LocaleContext";

const TRANSLATIONS = { en, es };

export default function useTranslation() {
  const { locale, setLocale, languages } = useLocale();

  const changeLanguage = useCallback(
    (locale) => {
      if (languages.includes(locale)) return setLocale(locale);
    },
    [setLocale, languages]
  );

  const t = useCallback(
    (keyString) => {
      const dictionary = TRANSLATIONS[locale];
      let value = null;
      const keySplited = keyString.split(".");
      for (const item of keySplited) {
        if (!value) {
          value = dictionary[item];
        } else {
          value = value[item];
        }
      }
      return value;
    },
    [locale]
  );

  return { t, locale, changeLanguage };
}

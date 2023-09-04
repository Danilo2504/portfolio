"use client";
import React, { createContext, useContext, useState } from "react";

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
  const languages = ["es", "en"];
  const [locale, setLocale] = useState(languages[0]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, languages }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => {
  return useContext(LocaleContext);
};

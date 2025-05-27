import React, { createContext, useState, useEffect } from 'react';
import { blogTranslations } from '../i18n/translations'; // Assuming this path is correct

// Create the Translation Context
export const TranslationContext = createContext();

// Create the Translation Provider component
export const TranslationProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [tReady, setTReady] = useState(false);

  // Effect to detect and set initial language
  useEffect(() => {
    const detectLanguage = () => {
      const storedLang = localStorage.getItem('preferred-language');
      if (storedLang && blogTranslations[storedLang]) {
        return storedLang;
      }

      const browserLang = navigator.language.split('-')[0];
      if (blogTranslations[browserLang]) {
        return browserLang;
      }

      return 'en'; // fallback
    };

    const detectedLang = detectLanguage();
    setCurrentLanguage(detectedLang);
    setTReady(true); // Translations are ready once initial language is set
  }, []); // Empty dependency array means this runs only once on mount

  // Function to change the language
  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  // The 't' function that will be provided by the context
  const t = (key) => {
    const keys = key.split('.');
    let value = blogTranslations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  // The value that will be provided to consumers of this context
  const contextValue = {
    t,
    currentLanguage,
    changeLanguage,
    tReady
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

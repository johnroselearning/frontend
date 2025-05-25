import { useState, useEffect } from 'react';
import { blogTranslations } from '../i18n/translations';

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const detectLanguage = () => {
      // Check stored preference
      const storedLang = localStorage.getItem('preferred-language');
      if (storedLang && blogTranslations[storedLang]) {
        return storedLang;
      }

      // Detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (blogTranslations[browserLang]) {
        return browserLang;
      }

      return 'en'; // fallback
    };

    const detectedLang = detectLanguage();
    setCurrentLanguage(detectedLang);
  }, []);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = blogTranslations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { t, currentLanguage, changeLanguage };
};
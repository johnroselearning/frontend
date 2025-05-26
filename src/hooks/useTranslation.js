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

// In your useTranslation hook file

// import { useState } from 'react';
// import  blogPosts  from '../data/blogPosts'; 
// export const useTranslation = () => {
//   const [language, setLanguage] = useState('en'); // or get from context/localStorage
  
//   const t = (key, params) => {
//     const keys = key.split('.');
//     let value = blogPosts[language];
    
//     for (const k of keys) {
//       value = value?.[k];
//     }
    
//     if (params && typeof value === 'string') {
//       return Object.keys(params).reduce((str, param) => {
//         return str.replace(`{${param}}`, params[param]);
//       }, value);
//     }
    
//     return value || key;
//   };
  
//   return { t, language, setLanguage }; // Return language too
// };

// import { useState } from 'react';
// import {blogTranslations} from '../i18n/translations';// Import the translations file

// export const useTranslation = () => {
//   const [language, setLanguage] = useState('en');

//   const t = (key, params) => {
//     const keys = key.split('.');
//     let value = blogTranslations[language]; // Use translations instead of blogPosts
    
//     for (const k of keys) {
//       value = value?.[k];
//     }
    
//     if (params && typeof value === 'string') {
//       return Object.keys(params).reduce((str, param) => {
//         return str.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
//       }, value);
//     }
    
//     return value || key;
//   };

//   return { t, language, setLanguage };
// };
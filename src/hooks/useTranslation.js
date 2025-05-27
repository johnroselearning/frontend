// import { useState, useEffect } from 'react';
// import { blogTranslations } from '../i18n/translations';

// export const useTranslation = () => {
//   console.log('useTranslation hook initialized');
//   console.log(localStorage.getItem('preferred-language'));
//   const [currentLanguage, setCurrentLanguage] = useState('en');
//    const [tReady, setTReady] = useState(false); // Optional: to track if translations are loaded
//   useEffect(() => {
//     const detectLanguage = () => {
//       // Check stored preference
//       const storedLang = localStorage.getItem('preferred-language');
//       if (storedLang && blogTranslations[storedLang]) {
//         return storedLang;
//       }

//       // Detect browser language
//       const browserLang = navigator.language.split('-')[0];
//       if (blogTranslations[browserLang]) {
//         return browserLang;
//       }

//       return 'en'; // fallback
//     };

//     const detectedLang = detectLanguage();
//     setCurrentLanguage(detectedLang);
//     setTReady(true); // Translations are ready after initial language detection
//   }, []); // Empty dependency array means this runs only once on mount

//   const changeLanguage = (lang) => {
//     setCurrentLanguage(lang);
//     localStorage.setItem('preferred-language', lang);
//   };

//   const t = (key) => {
//     const keys = key.split('.');
//     let value = blogTranslations[currentLanguage];
    
//     for (const k of keys) {
//       value = value?.[k];
//     }
    
//     return value || key;
//   };

//   return { t, currentLanguage, changeLanguage,tReady };
// };


import { useContext } from 'react';
import { TranslationContext } from '../contexts/TranslationContext';

export const useTranslation = () => {
  // Consume the context to get the shared translation logic and state
  const context = useContext(TranslationContext);

  // If the hook is used outside of a TranslationProvider, throw an error
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }

  return context;
};

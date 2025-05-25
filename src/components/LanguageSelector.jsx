import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageSelector = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = {
    en: { name: 'English', flag: '🇺🇸' },
    ml: { name: 'മലയാളം', flag: '🇮🇳' },
    hi: { name: 'हिंदी', flag: '🇮🇳' }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50"
      >
        <Globe className="w-4 h-4" />
        <span>{languages[currentLanguage].flag} {languages[currentLanguage].name}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border rounded-lg shadow-lg z-20 min-w-full">
          {Object.entries(languages).map(([code, lang]) => (
            <button
              key={code}
              onClick={() => {
                onLanguageChange(code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 ${
                currentLanguage === code ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import LanguageSelector from './LanguageSelector';

const BlogHeader = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{t('blog.title')}</h1>
            <p className="text-xl opacity-90">{t('blog.subtitle')}</p>
          </div>
          <LanguageSelector 
            currentLanguage={currentLanguage}
            onLanguageChange={changeLanguage}
          />
        </div>
        
        <div className="flex items-center max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('blog.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
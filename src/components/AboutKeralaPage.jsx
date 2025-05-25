import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const AboutKeralaPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t('blog.menu.about')}</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-700 leading-relaxed mb-4">
          Kerala, known as "God's Own Country," is a state in southern India famous for its tropical beauty, 
          backwaters, beaches, and rich cultural heritage.
        </p>
        <p className="text-gray-700 leading-relaxed">
          From the misty hills of Munnar to the serene backwaters of Alleppey, Kerala offers 
          diverse experiences for every traveler.
        </p>
      </div>
    </div>
  );
};

export default AboutKeralaPage;
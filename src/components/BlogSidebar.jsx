import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const BlogSidebar = ({ activeCategory, onCategoryChange }) => {
  const { t } = useTranslation();
  const location = useLocation();
  console.log('BlogSidebar rendered with activeCategory::', activeCategory);
  console.log(t('blog.menu.categories'));
 

  const menuItems = [
    { id: 'latest', label: t('blog.menu.latest'), path: '/blog' },
    { id: 'popular', label: t('blog.menu.popular'), path: '/blog/popular' },
    { id: 'categories', label: t('blog.menu.categories'), path: '/blog/categories'},
    { id: 'destinations', label: t('blog.menu.destinations'), path: '/blog/destinations' },
    { id: 'about', label: t('blog.menu.about'), path: '/blog/about-kerala' }
  ];

  const categories = [
    { id: 'all', label: t('blog.categories.all')},
    { id: 'destinations', label: t('blog.categories.destinations')},
    { id: 'culture', label: t('blog.categories.culture')},
    { id: 'food', label: t('blog.categories.food')},
    { id: 'adventure', label: t('blog.categories.adventure')},
    { id: 'tips', label: t('blog.categories.tips')} 
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6">
      <nav className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Navigation</h3>
          {menuItems.map(item => (
            <Link
              key={item.id}
              to={item.path}
              className={`block px-3 py-2 rounded-md transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="border-t pt-4">
          <h3 className="font-semibold text-gray-800 mb-3">{t('blog.menu.categories')}</h3>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeCategory === category.id
                  ? 'bg-green-100 text-green-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default BlogSidebar;
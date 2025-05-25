import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import BlogHeader from './BlogHeader';
import BlogSidebar from './BlogSidebar';
import BlogGrid from './BlogGrid';
import BlogPostDetail from './BlogPostDetail';
import AboutKeralaPage from './AboutKeralaPage';

const BlogLayout = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample blog posts data
  const blogPosts = [
    {
      id: 'munnar-tea-capital',
      title: t('posts.munnar.title'),
      excerpt: t('posts.munnar.excerpt'),
      content: t('posts.munnar.content'),
      image: '/api/placeholder/400/240',
      date: '2024-01-15',
      author: 'Ravi Kumar',
      readTime: 5,
      category: 'destinations'
    },
    {
      id: 'alleppey-backwaters',
      title: t('posts.backwaters.title'),
      excerpt: t('posts.backwaters.excerpt'),
      content: t('posts.backwaters.content'),
      image: '/api/placeholder/400/240',
      date: '2024-01-10',
      author: 'Priya Nair',
      readTime: 7,
      category: 'destinations'
    },
    {
      id: 'kerala-ayurveda',
      title: t('posts.ayurveda.title'),
      excerpt: t('posts.ayurveda.excerpt'),
      content: t('posts.ayurveda.content'),
      image: '/api/placeholder/400/240',
      date: '2024-01-05',
      author: 'Dr. Suresh',
      readTime: 6,
      category: 'culture'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogHeader />
      
      <div className="flex max-w-7xl mx-auto">
        <BlogSidebar 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <main className="flex-1 p-6">
          <Routes>
            <Route 
              path="/" 
              element={<BlogGrid posts={blogPosts} category={activeCategory} />} 
            />
            <Route 
              path="/popular" 
              element={<BlogGrid posts={blogPosts.slice(0, 2)} />} 
            />
            <Route 
              path="/categories" 
              element={<BlogGrid posts={blogPosts} category={activeCategory} />} 
            />
            <Route 
              path="/destinations" 
              element={<BlogGrid posts={blogPosts.filter(p => p.category === 'destinations')} />} 
            />
            <Route 
              path="/post/:id" 
              element={<BlogPostDetail posts={blogPosts} />} 
            />
            <Route 
              path="/about-kerala" 
              element={<AboutKeralaPage />} 
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default BlogLayout;
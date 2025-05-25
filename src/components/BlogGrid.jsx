import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import BlogPost from './BlogPost';

const BlogGrid = ({ posts, category = 'all' }) => {
  const { t } = useTranslation();
  
  const filteredPosts = category === 'all' 
    ? posts 
    : posts.filter(post => post.category === category);

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">{t('blog.noResults')}</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredPosts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;
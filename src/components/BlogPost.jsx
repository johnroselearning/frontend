import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const BlogPost = ({ post, isPreview = true }) => {
  const { t } = useTranslation();

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="w-4 h-4 mr-1" />
          <span className="mr-4">{t('blog.publishedOn')} {post.date}</span>
          <Clock className="w-4 h-4 mr-1" />
          <span className="mr-4">{post.readTime} {t('blog.readTime')}</span>
          <User className="w-4 h-4 mr-1" />
          <span>{t('blog.author')} {post.author}</span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        {isPreview && (
          <Link
            to={`/blog/post/${post.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            {t('blog.readMore')} →
          </Link>
        )}
        
        {!isPreview && (
          <div className="prose max-w-none">
            <p>{post.content}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPost;
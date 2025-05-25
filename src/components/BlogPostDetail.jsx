import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import BlogPost from './BlogPost';

const BlogPostDetail = ({ posts }) => {
  const { id } = useParams();
  const { t } = useTranslation();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return <div className="text-center py-12">Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        to="/blog"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t('blog.backToHome')}
      </Link>
      <BlogPost post={post} isPreview={false} />
    </div>
  );
};

export default BlogPostDetail;
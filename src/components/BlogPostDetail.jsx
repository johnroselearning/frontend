// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';
// import { useTranslation } from '../hooks/useTranslation';
// import BlogPost from './BlogPost';

// const BlogPostDetail = ({ posts }) => {
//   const { id } = useParams();
//   const { t } = useTranslation();
//   const post = posts.find(p => p.id === id);

//   if (!post) {
//     return <div className="text-center py-12">Post not found</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto">
//       <Link 
//         to="/blog"
//         className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
//       >
//         <ArrowLeft className="w-4 h-4 mr-2" />
//         {t('blog.backToHome')}
//       </Link>
//       <BlogPost post={post} isPreview={false} />
//     </div>
//   );
// };

// export default BlogPostDetail;

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import BlogPost from './BlogPost';

const BlogPostDetail = ({ posts }) => {
  const { id } = useParams();
  const { t } = useTranslation();
  
  // Find the post by ID
  const post = posts.find(p => p.id === parseInt(id));
  
  // If post not found, redirect or show error
  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          {t('blog.postNotFound')}
        </h1>
        <p className="text-gray-600 mb-6">
          {t('blog.postNotFoundDescription')}
        </p>
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('blog.goBack')}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        {t('blog.goBack')}
      </button>

      {/* Render the full blog post */}
      <BlogPost post={post} isPreview={false} />
    </div>
  );
};

export default BlogPostDetail;
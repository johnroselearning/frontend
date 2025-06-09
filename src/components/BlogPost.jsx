// import React , { useState, useEffect,useMemo }from 'react';
// import { Link } from 'react-router-dom';
// import { Calendar, User, Clock } from 'lucide-react';
// import { useTranslation } from '../hooks/useTranslation';
// import blogPosts, { getBlogPostById, getBlogPostsByCategory, getRecentPosts } from '../data/blogPosts.js';
// import SEO from './SEO';
// import SchemaGenerator from './SchemaGenerator';

// const BlogPost = ({ post, isPreview = true }) => {
//   const { t } = useTranslation();

//   return (
//     <>
//     <SEO
//         title={post.title}
//         description={post.summary}
//         image={post.coverImage}
//         url={`https://explorekerala.ai/blog/${post.slug}`}
//       />

//       <SchemaGenerator
//         type="blog"
//         data={{
//           title: post.title,
//           description: post.summary,
//           image: post.coverImage,
//           url: `https://explorekerala.ai/blog/${post.slug}`,
//           datePublished: post.date,
//         }}
//       />
   
//           <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//             <img 
//               src={post.image} 
//               alt={post.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <div className="flex items-center text-sm text-gray-500 mb-2">
//                 <Calendar className="w-4 h-4 mr-1" />
//                 <span className="mr-4">{t('blog.publishedOn')} {post.date}</span>
//                 <Clock className="w-4 h-4 mr-1" />
//                 <span className="mr-4">{post.readTime} {t('blog.readTime')}</span>
//                 <User className="w-4 h-4 mr-1" />
//                 <span>{t('blog.author')} {post.author}</span>
//               </div>
              
//               <h2 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h2>
//               <p className="text-gray-600 mb-4">{post.excerpt}</p>
              
//               {isPreview && (
//                 <Link
//                   to={`/blog/post/${post.id}`}
//                   className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
//                 >
//                   {t('blog.readMore')} →
//                 </Link>
//               )}
              
//               {!isPreview && (
//                 <div className="prose max-w-none">
//                   <p>t({post.content})</p>
//                 </div>
//               )}
              
//             </div>
//           </article>
//      </>
//   );
// };

// export default BlogPost;

// import React , { useState, useEffect,useMemo }from 'react';
// import { Link } from 'react-router-dom';
// import { Calendar, User, Clock } from 'lucide-react';
// import { useTranslation } from '../hooks/useTranslation';
// import blogPosts, { getBlogPostById, getBlogPostsByCategory, getRecentPosts } from '../data/blogPosts.js';
// import SEO from './SEO';
// import SchemaGenerator from './SchemaGenerator';

// const BlogPost = ({ post, isPreview = true }) => {
//   const { t } = useTranslation();

//   // Function to render content safely
//   const renderContent = (content) => {
//     if (typeof content === 'string') {
//       // If content contains HTML, render it as HTML
//       if (content.includes('<')) {
//         return <div dangerouslySetInnerHTML={{ __html: content }} />;
//       }
//       // If it's plain text, split by paragraphs
//       const paragraphs = content.split('\n\n');
//       return paragraphs.map((paragraph, index) => (
//         <p key={index} className="mb-4">{paragraph}</p>
//       ));
//     }
//     return content;
//   };

//   return (
//     <>
//       <SEO
//         title={post.title}
//         description={post.summary}
//         image={post.coverImage}
//         url={`https://exploremunnar.ai/blog/${post.slug}`}
//       />

//       <SchemaGenerator
//         type="blog"
//         data={{
//           title: post.title,
//           description: post.summary,
//           image: post.coverImage,
//           url: `https://explorekerala.ai/blog/${post.slug}`,
//           datePublished: post.date,
//         }}
//       />
   
//       <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//         <img 
//           src={post.image} 
//           alt={post.title}
//           className="w-full h-48 object-cover"
//         />
//         <div className="p-6">
//           <div className="flex items-center text-sm text-gray-500 mb-2">
//             <Calendar className="w-4 h-4 mr-1" />
//             <span className="mr-4">{t('blog.publishedOn')} {post.date}</span>
//             <Clock className="w-4 h-4 mr-1" />
//             <span className="mr-4">{post.readTime} {t('blog.readTime')}</span>
//             <User className="w-4 h-4 mr-1" />
//             <span>{t('blog.author')} {post.author}</span>
//           </div>
          
//           <h2 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h2>
//           <p className="text-gray-600 mb-4">{post.excerpt}</p>
          
//           {isPreview && (
//             <Link
//               to={`/blog/post/${post.id}`}
//               className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
//             >
//               {t('blog.readMore')} →
//             </Link>
//           )}
          
//           {!isPreview && post.content && (
//             <div className="prose max-w-none mt-6 text-gray-700 leading-relaxed">
//               {renderContent(post.content)}
//             </div>
//           )}
          
//         </div>
//       </article>
//     </>
//   );
// };

// export default BlogPost;

import React , { useState, useEffect,useMemo }from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import blogPosts, { getBlogPostById, getBlogPostsByCategory, getRecentPosts } from '../data/blogPosts.js';
import SEO from './SEO';
import SchemaGenerator from './SchemaGenerator';

const BlogPost = ({ post, isPreview = true }) => {
  const { t } = useTranslation();

  // Function to render content safely
  const renderContent = (content) => {
    console.log(content.includes('<'));
    console.log(content);
    console.log(typeof content);

    if (Array.isArray(content)) {
    console.log('Rendering array content');
    return content.map((item, index) => {
      // Each array item might contain HTML or plain text
      if (typeof item === 'string') {
        // Clean up the string (remove extra whitespace and newlines)
        const cleanedItem = item.trim();
        
        if (cleanedItem.includes('<')) {
          // If it contains HTML, render as HTML
          return (
            <div 
              key={index} 
              className="mb-4" 
              dangerouslySetInnerHTML={{ __html: cleanedItem }} 
            />
          );
        } else {
          // If it's plain text with markdown-like formatting, you can:
          // Process markdown-like formatting (bold text)
          const processedText = cleanedItem.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          return (
            <p 
              key={index} 
              className="mb-4" 
              dangerouslySetInnerHTML={{ __html: processedText }} 
            />
          );
        }
      }
      return null;
    }).filter(Boolean); // Remove any null values
  }


    if (typeof content === 'string') {
      // If content contains HTML, render it as HTML
      if (content.includes('<')) {
        console.log("paragraphs1" );
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
      }
      // If it's plain text, split by paragraphs
      const paragraphs = content.split('\n\n');
      console.log(paragraphs);;
      console.log("paragraphs" );
      return paragraphs.map((paragraph, index) => (
        <p key={index} className="mb-4">{paragraph}</p>
        
      ));
    }
    return content;
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.summary}
        image={post.coverImage}
        url={`https://explorekerala.ai/blog/${post.slug}`}
      />

      <SchemaGenerator
        type="blog"
        data={{
          title: post.title,
          description: post.summary,
          image: post.coverImage,
          url: `https://explorekerala.ai/blog/${post.slug}`,
          datePublished: post.date,
        }}
      />
   
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img 
          src={post.image} 
          alt={t(post.title)}
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
            <div className="prose max-w-none mt-6 text-gray-700 leading-relaxed">
              {post.content ? (
                renderContent(post.content)
              ) : (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800">
                    <strong>Debug:</strong> No content available for this post.
                  </p>
                  <p className="text-sm text-yellow-600 mt-2">
                    Post data: {JSON.stringify(post, null, 2)}
                  </p>
                </div>
              )}
            </div>
          )}
          
        </div>
      </article>
    </>
  );
};

export default BlogPost;
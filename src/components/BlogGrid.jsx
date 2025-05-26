// import React from 'react';
// import { useTranslation } from '../hooks/useTranslation';
// import BlogPost from './BlogPost';

// const BlogGrid = ({ posts, category = 'all' }) => {
//   const { t } = useTranslation();
  
//   const filteredPosts = category === 'all' 
//     ? posts 
//     : posts.filter(post => post.category === category);

//   if (filteredPosts.length === 0) {
//     return (
//       <div className="text-center py-12">
//         <p className="text-gray-500 text-lg">{t('blog.noResults')}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {filteredPosts.map(post => (
//         <BlogPost key={post.id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default BlogGrid;
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import BlogPost from './BlogPost';

const BlogGrid = ({ posts, category = 'all', postsPerPage = 6 }) => {
  const { t, language } = useTranslation(); // Get current language
  const [currentPage, setCurrentPage] = useState(1);
  const [translatedPosts, setTranslatedPosts] = useState(posts);
  
  // Update translated posts when language changes
  useEffect(() => {
    setTranslatedPosts(posts);
  }, [posts, language]);
  
  // Filter posts based on category
  const filteredPosts = category === 'all' 
    ? translatedPosts 
    : translatedPosts.filter(post => post.category === category);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  // Calculate pagination values
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of blog grid
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is small
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show first page, current page range, and last page
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);
      
      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push('...');
        }
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push('...');
        }
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  if (filteredPosts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">{t('blog.noResults')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center space-y-4">
          {/* Page Info */}
          <div className="text-sm text-gray-600">
            {t('pagination.showing') 
              ? t('pagination.showing')
                  .replace('{start}', startIndex + 1)
                  .replace('{end}', Math.min(endIndex, totalPosts))
                  .replace('{total}', totalPosts)
              : `Showing ${startIndex + 1}-${Math.min(endIndex, totalPosts)} of ${totalPosts} posts`
            }
          </div>

          {/* Pagination Buttons */}
          <div className="flex items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {t('pagination.previous') || 'Previous'}
            </button>

            {/* Page Numbers */}
            <div className="flex items-center space-x-1">
              {getPageNumbers().map((pageNumber, index) => (
                <React.Fragment key={index}>
                  {pageNumber === '...' ? (
                    <span className="px-3 py-2 text-gray-400">...</span>
                  ) : (
                    <button
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        currentPage === pageNumber
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {t('pagination.next') || 'Next'}
            </button>
          </div>

          {/* Mobile-friendly pagination for smaller screens */}
          <div className="md:hidden flex items-center justify-between w-full max-w-xs">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              ← {t('pagination.prev') || 'Prev'}
            </button>
            
            <span className="text-sm text-gray-600">
              {currentPage} / {totalPages}
            </span>
            
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {t('pagination.next') || 'Next'} →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
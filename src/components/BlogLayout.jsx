import React, { useState ,useEffect} from 'react';
import { Routes, Route ,useNavigate,useSearchParams} from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import BlogHeader from './BlogHeader';
import BlogSidebar from './BlogSidebar';
import BlogGrid from './BlogGrid';
import BlogPostDetail from './BlogPostDetail';
import AboutKeralaPage from './AboutKeralaPage';
import SchemaGenerator from './SchemaGenerator';
import SEO from './SEO';

import blogPosts, { getBlogPostById, getBlogPostsByCategory, getRecentPosts } from '../data/blogPosts.js';

// import { TranslationProvider } from '../contexts/TranslationContext'; // Import the provider


const BlogLayout = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const navigate = useNavigate();
   const [searchParams] = useSearchParams(); // Get query parameters

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam);
    } else {
      setActiveCategory('all'); // Default to 'all' if no category param
    }
  }, [searchParams]);

   const handleCategoryChange = (category) => {
    setActiveCategory(category);
    // Programmatically navigate to the categories route with the selected category
    // This will trigger the useEffect hook to update the activeCategory state
    navigate(`/blog/categories?category=${category}`);
  };

console.log('BlogLayout rendered with activeCategory:', activeCategory);
console.log('Blog posts:', blogPosts);
console.log('Blog post count:', blogPosts.length);
console.log('Blog post id:', blogPosts.id);

  // const recentPosts = getRecentPosts(3);
  // const adventurePosts = getBlogPostsByCategory('adventure');
  // const specificPost = getBlogPostById('munnar-tea-capital');

  
  // const popularPosts = getPopularPosts(5);
  // Sample blog posts data
  // const blogPosts = [
  //   {
  //     id: 'munnar-tea-capital',
  //     title: t('posts.munnar.title'),
  //     excerpt: t('posts.munnar.excerpt'),
  //     content: t('posts.munnar.content'),
  //     image: '/api/placeholder/400/240',
  //     date: '2024-01-15',
  //     author: 'Ravi Kumar',
  //     readTime: 5,
  //     category: 'destinations'
  //   },
  //   {
  //     id: 'alleppey-backwaters',
  //     title: t('posts.backwaters.title'),
  //     excerpt: t('posts.backwaters.excerpt'),
  //     content: t('posts.backwaters.content'),
  //     image: '/api/placeholder/400/240',
  //     date: '2024-01-10',
  //     author: 'Priya Nair',
  //     readTime: 7,
  //     category: 'destinations'
  //   },
  //   {
  //     id: 'kerala-ayurveda',
  //     title: t('posts.ayurveda.title'),
  //     excerpt: t('posts.ayurveda.excerpt'),
  //     content: t('posts.ayurveda.content'),
  //     image: '/api/placeholder/400/240',
  //     date: '2024-01-05',
  //     author: 'Dr. Suresh',
  //     readTime: 6,
  //     category: 'culture'
  //   },
  //       // Destination posts
  //    { id: 1, title: "Hidden Gems of Santorini", category: "destinations", author: "Maria K.", date: "2024-05-20", readTime: 6,image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400", excerpt: "Discover the lesser-known spots in this Greek paradise that most tourists miss." ,  content: t('posts.santorini.content')},
  //   { id: 2, title: "Tokyo's Best Neighborhoods", category: "destinations", author: "Kenji S.", date: "2024-05-18", readTime: 6,image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400", excerpt: "From bustling Shibuya to peaceful Yanaka, explore Tokyo's diverse districts.",content: t('posts.santorini.content') },
  //   { id: 3, title: "Bali's Secret Beaches", category: "destinations", author: "Sarah L.", date: "2024-05-15", readTime: 6,image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400", excerpt: "Skip the crowds and find your own slice of paradise in Bali.",content: t('posts.santorini.content') },
  //   { id: 4, title: "Patagonia Wilderness Guide", category: "destinations", author: "Carlos M.", date: "2024-05-12",readTime: 6, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400", excerpt: "Navigate the stunning landscapes of South America's frontier.",content: t('posts.patagonia.content') },
  //   { id: 5, title: "Morocco's Imperial Cities", category: "destinations", author: "Fatima B.", date: "2024-05-10", readTime: 6,image: "https://images.unsplash.com/photo-1539650116574-75c0c6d34f51?w=400", excerpt: "Journey through Marrakech, Fez, Rabat, and Meknes.",content: t('posts.morocco.content') },
  //    // Cultural & Heritage posts
  //   { id: 6, title: "Ancient Temples of Angkor", category: "culture", author: "David W.", date: "2024-05-22", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=400", excerpt: "Exploring Cambodia's magnificent temple complex and its rich history." },
  //   { id: 7, title: "Flamenco Culture in Seville", category: "culture", author: "Isabella R.", date: "2024-05-19", image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400", excerpt: "Dive deep into the passionate world of traditional Spanish dance." },
  //   { id: 8, title: "Machu Picchu: Beyond the Ruins", category: "culture", author: "Miguel A.", date: "2024-05-17", image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=400", excerpt: "Understanding the Inca civilization and its lasting legacy." },
  //   { id: 9, title: "Celtic Heritage in Ireland", category: "culture", author: "Siobhan O.", date: "2024-05-14", image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400", excerpt: "Tracing ancient Celtic traditions through modern Irish culture." },
  //   { id: 10, title: "Samurai History in Kyoto", category: "culture", author: "Hiroshi T.", date: "2024-05-11", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400", excerpt: "Walking the paths of ancient warriors in Japan's former capital." },
  //     // Food & Cuisine posts
  //   { id: 11, title: "Street Food Paradise in Bangkok", category: "food", author: "Lisa Chen", date: "2024-05-21", image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400", excerpt: "A foodie's guide to Thailand's incredible street food scene." },
  //   { id: 12, title: "Pasta Making in Tuscany", category: "food", author: "Giuseppe F.", date: "2024-05-16", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400", excerpt: "Learn traditional pasta techniques from Italian nonnas." },
  //   { id: 13, title: "Spice Markets of Istanbul", category: "food", author: "Ayşe K.", date: "2024-05-13", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400", excerpt: "Navigate the aromatic world of Turkish spices and flavors." },
  //   { id: 14, title: "Wine Tasting in Argentina", category: "food", author: "Roberto S.", date: "2024-05-09", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", excerpt: "Discovering world-class Malbec in Mendoza's vineyards." },
  //   { id: 15, title: "Japanese Tea Ceremony", category: "food", author: "Yuki M.", date: "2024-05-07", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400", excerpt: "The art and philosophy behind Japan's traditional tea culture." },
    
  //   // Adventure posts
  //   { id: 16, title: "Climbing Mount Kilimanjaro", category: "adventure", author: "Alex P.", date: "2024-05-23", image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=400", excerpt: "A complete guide to conquering Africa's highest peak." },
  //   { id: 17, title: "Whitewater Rafting in Colorado", category: "adventure", author: "Jake R.", date: "2024-05-20", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400", excerpt: "Navigate the thrilling rapids of the Colorado River." },
  //   { id: 18, title: "Surfing the Mentawai Islands", category: "adventure", author: "Kelly S.", date: "2024-05-18", image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400", excerpt: "Catching perfect waves in Indonesia's surf paradise." },
  //   { id: 19, title: "Trekking in Nepal's Himalayas", category: "adventure", author: "Pemba S.", date: "2024-05-15", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400", excerpt: "Journey to Everest Base Camp and beyond." },
  //   { id: 20, title: "Diving the Great Barrier Reef", category: "adventure", author: "Emma T.", date: "2024-05-12", image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400", excerpt: "Explore one of the world's most diverse marine ecosystems." },
    
  //   // Travel Tips posts
  //   { id: 21, title: "Budget Backpacking Europe", category: "travel-tips", author: "Mark D.", date: "2024-05-24", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400", excerpt: "How to explore Europe on $50 a day without sacrificing experiences." },
  //   { id: 22, title: "Digital Nomad Guide to Lisbon", category: "travel-tips", author: "Anna V.", date: "2024-05-22", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400", excerpt: "Best coworking spaces, cafes, and neighborhoods for remote work." },
  //   { id: 23, title: "Solo Female Travel in India", category: "travel-tips", author: "Priya N.", date: "2024-05-19", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400", excerpt: "Safety tips and cultural insights for independent female travelers." },
  //   { id: 24, title: "Photography Gear for Travel", category: "travel-tips", author: "Tom H.", date: "2024-05-17", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400", excerpt: "Essential camera equipment for capturing your adventures." },
  //   { id: 25, title: "Travel Insurance Guide", category: "travel-tips", author: "Linda M.", date: "2024-05-14", image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400", excerpt: "Everything you need to know about protecting your trips." }
  // ];

  return (
    <>
        {/* <TranslationProvider> */}
        <div className="min-h-screen bg-gray-50">
          <BlogHeader />
          
          <div className="flex max-w-7xl mx-auto">
            <BlogSidebar 
              activeCategory={activeCategory}
              // onCategoryChange={setActiveCategory}
              onCategoryChange={handleCategoryChange} // Pass the navigation handler
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
                
                {/* <Route 
                  path="/about-kerala" 
                  element={<AboutKeralaPage />} 
                /> */}
              </Routes>
            </main>
          </div>
        </div>
     {/* </TranslationProvider> */}
     </>

  );
};

export default BlogLayout;
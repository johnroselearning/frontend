// import React, { useState } from 'react';
// import { 
//   MapPin, 
//   Calendar, 
//   Tent, 
//   Mountain, 
//   Bot, 
//   Home, 
//   User, 
//   Settings,
//   ChevronLeft,
//   ChevronRight,
//   Compass,
//   Bell,
//   Menu,
//   X,
//   BookOpen,
//   Users,
//   Mail
// } from 'lucide-react';

// // Mock Router for demonstration (replace with actual React Router)
// const mockNavigate = (path) => {
//   console.log(`Navigating to: ${path}`);
// };

// // Reusable Menu Item Component
// const MenuItem = ({ icon: Icon, label, path, isActive, onClick, isCollapsed, badge, count }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   if (isActive) {
//     return (
//       <button
//         onClick={() => onClick(path)}
//         className="w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 bg-blue-50 border-l-4 border-blue-600 shadow-sm"
//         title={isCollapsed ? label : ''}
//       >
//         <div className="flex items-center space-x-3">
//           <div className="text-blue-600">
//             <Icon className="h-5 w-5 flex-shrink-0" />
//           </div>
//           {!isCollapsed && (
//             <span className="text-sm font-medium text-blue-700">
//               {label}
//             </span>
//           )}
//         </div>
        
//         {!isCollapsed && (
//           <div className="flex items-center space-x-2">
//             {badge && (
//               <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
//                 {badge}
//               </span>
//             )}
//             {count && (
//               <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
//                 {count}
//               </span>
//             )}
//           </div>
//         )}
//       </button>
//     );
//   }

//   return (
//     <button
//       onClick={() => onClick(path)}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 hover:bg-gray-50"
//       title={isCollapsed ? label : ''}
//     >
//       <div className="flex items-center space-x-3">
//         <div className={`transition-colors duration-200 ${isHovered ? 'text-gray-700' : 'text-gray-500'}`}>
//           <Icon className="h-5 w-5 flex-shrink-0" />
//         </div>
//         {!isCollapsed && (
//           <span className={`text-sm font-medium transition-colors duration-200 ${isHovered ? 'text-gray-900' : 'text-gray-700'}`}>
//             {label}
//           </span>
//         )}
//       </div>
      
//       {!isCollapsed && (
//         <div className="flex items-center space-x-2">
//           {badge && (
//             <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
//               {badge}
//             </span>
//           )}
//           {count && (
//             <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
//               {count}
//             </span>
//           )}
//         </div>
//       )}
//     </button>
//   );
// };

// // Main Navigation Component
// const VerticalNavigation = ({ isCollapsed, onToggleCollapse, activeItem, onNavigate }) => {
//   const navigationItems = [
//     { icon: Home, label: 'Dashboard', path: '/', badge: null, count: null },
//     { icon: MapPin, label: 'Destinations', path: '/destinations', badge: null, count: null },
//     { icon: Calendar, label: 'Itinerary Creator', path: '/itinerary', badge: 'AI', count: null },
//     { icon: Tent, label: 'Camping Spots', path: '/camping', badge: null, count: 5 },
//     { icon: Mountain, label: 'Trekking Routes', path: '/trekking', badge: 'New', count: null },
//     { icon: Bot, label: 'AI Assistant', path: '/ai-assistant', badge: null, count: null },
//     { icon: Compass, label: 'Explore', path: '/explore', badge: null, count: 12 },
//     { icon: User, label: 'My Trips', path: '/trips', badge: null, count: 3 },
//     { icon: Settings, label: 'Settings', path: '/settings', badge: null, count: null }
//   ];

//   return (
//     <aside className={`bg-white shadow-lg transition-all duration-300 ${
//       isCollapsed ? 'w-16' : 'w-64'
//     } flex-shrink-0 border-r border-gray-200 h-screen flex flex-col`}>
//       <div className="p-4 flex-1">
//         {/* Sidebar Header */}
//         <div className="flex items-center justify-between mb-6">
//           {!isCollapsed && (
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <Bot size={20} className="text-white" />
//               </div>
//               <div>
//                 <h1 className="text-lg font-bold text-gray-900">TravelAI</h1>
//                 <p className="text-xs text-gray-500">Smart Planner</p>
//               </div>
//             </div>
//           )}
//           <button
//             onClick={onToggleCollapse}
//             className="p-1 rounded-md hover:bg-gray-100 transition-colors duration-200"
//           >
//             {isCollapsed ? <ChevronRight className="h-4 w-4 text-gray-600" /> : <X className="h-4 w-4 text-gray-600" />}
//           </button>
//         </div>

//         {/* Navigation Items */}
//         <nav className="space-y-2">
//           <div className={`${isCollapsed ? 'text-center' : 'text-left'} mb-4`}>
//             {!isCollapsed && (
//               <h2 className="text-sm font-semibold text-gray-900 mb-3">
//                 Travel Tools
//               </h2>
//             )}
//           </div>
//           {navigationItems.map((item) => (
//             <MenuItem
//               key={item.path}
//               icon={item.icon}
//               label={item.label}
//               path={item.path}
//               isActive={activeItem === item.path}
//               onClick={onNavigate}
//               isCollapsed={isCollapsed}
//               badge={item.badge}
//               count={item.count}
//             />
//           ))}
//         </nav>

//         {/* Quick Actions */}
//         {!isCollapsed && (
//           <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100">
//             <h3 className="text-sm font-semibold text-gray-900 mb-2">Quick Start</h3>
//             <p className="text-xs text-gray-600 mb-3">
//               Plan your next adventure with AI
//             </p>
//             <button className="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-sm">
//               Create New Trip
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <div className="p-4 border-t border-gray-200">
//         {!isCollapsed ? (
//           <div className="text-center">
//             <div className="flex items-center justify-center space-x-1 text-gray-500 text-xs">
//               <Bot size={12} />
//               <span>Powered by AI</span>
//             </div>
//             <p className="text-gray-400 text-xs mt-1">v2.1.0</p>
//           </div>
//         ) : (
//           <div className="flex justify-center">
//             <Bot size={16} className="text-gray-400" />
//           </div>
//         )}
//       </div>
//     </aside>
//   );
// };

// // Top Navigation Component
// const TopNavigation = ({ activeSection, onSectionChange, sidebarCollapsed, onToggleSidebar }) => {
//   const topNavItems = [
//     { id: 'dashboard', label: 'Home', icon: Home },
//     { id: 'destinations', label: 'Destinations', icon: MapPin },
//     { id: 'blog', label: 'Blog', icon: BookOpen },
//     { id: 'about', label: 'About', icon: Users },
//     { id: 'contact', label: 'Contact', icon: Mail }
//   ];

//   return (
//     <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//                 <MapPin className="h-5 w-5 text-white" />
//               </div>
//               <span className="text-xl font-bold text-gray-900">TravelAI Hub</span>
//             </div>
//           </div>

//           {/* Top Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {topNavItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => onSectionChange(item.id)}
//                 className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
//                   activeSection === item.id
//                     ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
//                     : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
//                 }`}
//               >
//                 <item.icon className="h-4 w-4" />
//                 <span>{item.label}</span>
//               </button>
//             ))}
//           </nav>

//           {/* Right side actions */}
//           <div className="flex items-center space-x-4">
//             <button className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
//               <Bell className="h-5 w-5" />
//               <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
//                 3
//               </span>
//             </button>
//             <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
//               <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//               <span className="hidden md:block text-sm text-gray-700">John Doe</span>
//             </button>
//             <button
//               onClick={onToggleSidebar}
//               className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
//             >
//               <Menu className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// // Demo Page Components
// const DashboardPage = () => (
//   <div className="space-y-6">
//     <div className="flex items-center justify-between">
//       <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
//       <div className="flex space-x-3">
//         <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors duration-200">
//           Export Data
//         </button>
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors duration-200">
//           New Trip
//         </button>
//       </div>
//     </div>
    
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="font-semibold text-gray-900 mb-2">Active Trips</h3>
//         <p className="text-2xl font-bold text-blue-600">3</p>
//         <p className="text-sm text-gray-600">Currently planning</p>
//       </div>
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="font-semibold text-gray-900 mb-2">Destinations</h3>
//         <p className="text-2xl font-bold text-green-600">12</p>
//         <p className="text-sm text-gray-600">Places to visit</p>
//       </div>
//       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//         <h3 className="font-semibold text-gray-900 mb-2">AI Suggestions</h3>
//         <p className="text-2xl font-bold text-purple-600">25</p>
//         <p className="text-sm text-gray-600">Personalized recommendations</p>
//       </div>
//     </div>
//   </div>
// );

// const DestinationsPage = () => (
//   <div className="space-y-6">
//     <div className="flex items-center justify-between">
//       <h1 className="text-2xl font-bold text-gray-900">Destinations</h1>
//       <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors duration-200">
//         Add Destination
//       </button>
//     </div>
    
//     <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white">
//       <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//       <h3 className="text-lg font-medium text-gray-900 mb-2">
//         Discover Amazing Places
//       </h3>
//       <p className="text-gray-600 mb-4">
//         Let our AI help you find the perfect destinations for your next adventure
//       </p>
//       <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
//         Explore Destinations
//       </button>
//     </div>
//   </div>
// );

// const ItineraryPage = () => (
//   <div className="space-y-6">
//     <div className="flex items-center justify-between">
//       <h1 className="text-2xl font-bold text-gray-900">AI Itinerary Builder</h1>
//       <div className="flex space-x-3">
//         <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors duration-200">
//           Save Draft
//         </button>
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors duration-200">
//           Generate with AI
//         </button>
//       </div>
//     </div>
    
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//         <h3 className="font-semibold text-gray-900 mb-2">Step 1</h3>
//         <p className="text-sm text-gray-600">
//           Choose destination and dates
//         </p>
//       </div>
//       <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//         <h3 className="font-semibold text-gray-900 mb-2">Step 2</h3>
//         <p className="text-sm text-gray-600">
//           AI suggests activities
//         </p>
//       </div>
//       <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
//         <h3 className="font-semibold text-gray-900 mb-2">Step 3</h3>
//         <p className="text-sm text-gray-600">
//           Review and customize
//         </p>
//       </div>
//     </div>
    
//     <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white">
//       <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//       <h3 className="text-lg font-medium text-gray-900 mb-2">
//         Start Building Your Itinerary
//       </h3>
//       <p className="text-gray-600 mb-4">
//         Our AI will create a personalized travel plan based on your preferences
//       </p>
//       <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200">
//         Start Planning
//       </button>
//     </div>
//   </div>
// );

// // Main App Component
// const TravelApp = () => {
//   const [activeSection, setActiveSection] = useState('dashboard');
//   const [activeItem, setActiveItem] = useState('/');
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   const handleNavigation = (path) => {
//     setActiveItem(path);
//     mockNavigate(path);
//   };

//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//     // Update active item based on section
//     switch(section) {
//       case 'dashboard':
//         setActiveItem('/');
//         break;
//       case 'destinations':
//         setActiveItem('/destinations');
//         break;
//       default:
//         setActiveItem('/');
//     }
//   };

//   const renderPage = () => {
//     switch (activeItem) {
//       case '/': return <DashboardPage />;
//       case '/destinations': return <DestinationsPage />;
//       case '/itinerary': return <ItineraryPage />;
//       default: return <DashboardPage />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <TopNavigation 
//         activeSection={activeSection}
//         onSectionChange={handleSectionChange}
//         sidebarCollapsed={sidebarCollapsed}
//         onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
//       />
      
//       <div className="flex">
//         <VerticalNavigation 
//           isCollapsed={sidebarCollapsed}
//           onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
//           activeItem={activeItem}
//           onNavigate={handleNavigation}
//         />
        
//         <main className="flex-1 p-6">
//           <div className="max-w-4xl">
//             {/* Breadcrumb */}
//             <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
//               <span className="capitalize">{activeSection}</span>
//               <ChevronRight className="h-4 w-4" />
//               <span className="text-gray-900 capitalize">
//                 {activeItem === '/' ? 'dashboard' : activeItem.replace('/', '').replace('-', ' ')}
//               </span>
//             </nav>

//             {/* Page Content */}
//             <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
//               {renderPage()}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default TravelApp;
import React, { useState } from 'react';
import { 
  Home, MapPin, BookOpen, Users, Mail, 
  Calendar, Tent, ShoppingBag, Map, User,
  Menu, X, ChevronRight, Settings, Bell
} from 'lucide-react';

const AppComponent = () => {
  const [activeSection, setActiveSection] = useState('destinations');
  const [activeSubItem, setActiveSubItem] = useState('itinerary-builder');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);


 
  // Top horizontal menu - Marketing/Info focused
  const topNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'destinations', label: 'Destinations', icon: MapPin },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'about', label: 'About', icon: Users },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  // Left vertical menu - Tools/App functionality
  const sidebarSections = {
    destinations: {
      title: 'Trip Planning',
      items: [
        { id: 'itinerary-builder', label: 'Itinerary Builder', icon: Calendar, badge: 'New' },
        { id: 'my-trips', label: 'My Trips', icon: Map, count: 3 },
        { id: 'camping-booking', label: 'Camping Spots', icon: Tent },
        { id: 'travel-guides', label: 'Travel Guides', icon: BookOpen }
      ]
    },
    blog: {
      title: 'Content Tools',
      items: [
        { id: 'write-post', label: 'Write Post', icon: BookOpen },
        { id: 'my-posts', label: 'My Posts', icon: User, count: 12 },
        { id: 'analytics', label: 'Analytics', icon: Settings },
        { id: 'Posts', label: 'Post', icon: BookOpen }
      ]
    },
    about: {
      title: 'Company Info',
      items: [
        { id: 'our-story', label: 'Our Story', icon: BookOpen },
        { id: 'team', label: 'Meet the Team', icon: Users },
        { id: 'careers', label: 'Careers', icon: Settings, badge: 'Hiring' }
      ]
    },
    contact: {
      title: 'Get in Touch',
      items: [
        { id: 'contact-form', label: 'Contact Form', icon: Mail },
        { id: 'support', label: 'Support Center', icon: Settings },
        { id: 'feedback', label: 'Feedback', icon: User }
      ]
    },
    home: {
      title: 'Dashboard',
      items: [
        { id: 'overview', label: 'Overview', icon: Home },
        { id: 'recent-activity', label: 'Recent Activity', icon: Calendar },
        { id: 'quick-actions', label: 'Quick Actions', icon: Settings }
      ]
    }
  };

  const currentSidebarItems = sidebarSections[activeSection] || sidebarSections.destinations;

  const getContentForSection = () => {
    switch (activeSubItem) {
      case 'itinerary-builder':
        return {
          title: 'Itinerary Builder',
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 1</h3>
                  <p className="text-sm text-gray-600">
                    Choose your destination and travel dates
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 2</h3>
                  <p className="text-sm text-gray-600">
                    Add activities and experiences
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Step 3</h3>
                  <p className="text-sm text-gray-600">
                    Review and share your itinerary
                  </p>
                </div>
              </div>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Start Building Your Itinerary
                </h3>
                <p className="text-gray-600 mb-4">
                  Drag and drop activities, or click to add them to your timeline
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                  Add First Activity
                </button>
              </div>
            </div>
          )
        };
      case 'my-trips':
        return {
          title: 'My Trips',
          content: (
            <div className="space-y-4">
              {[1, 2, 3].map(trip => (
                <div key={trip} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">Trip to Kerala #{trip}</h3>
                      <p className="text-sm text-gray-600">Kochi • Munnar • Alleppey</p>
                      <p className="text-xs text-gray-500 mt-1">Dec 15-22, 2024</p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Completed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )
        };
      case 'write-post':
        return {
          title: 'Write New Post',
          content: (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input 
                  type="text" 
                  placeholder="Enter your post title..." 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                <textarea 
                  rows={10}
                  placeholder="Write your travel story..." 
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )
        };
      case 'our-story':
        return {
          title: 'Our Story',
          content: (
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">
                TravelHub was born from a simple idea: travel planning should be as exciting as the journey itself. 
                Founded in 2020 by a group of passionate travelers, we've helped thousands of adventurers create 
                unforgettable experiences around the world.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Our mission is to make travel accessible, sustainable, and meaningful for everyone. Whether you're 
                planning a weekend getaway or a month-long expedition, we're here to help you every step of the way.
              </p>
            </div>
          )
        };
      default:
        return {
          title: activeSubItem.replace('-', ' '),
          content: (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <BookOpen className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Coming Soon
              </h3>
              <p className="text-gray-600">
                This section is under development. Check back soon!
              </p>
            </div>
          )
        };
    }
  };

  const currentContent = getContentForSection();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Horizontal Navigation */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">TravelHub</span>
              </div>
            </div>

            {/* Top Navigation */}
            <nav className="hidden md:flex space-x-8">
              {topNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    // Set default sub-item for each section
                    if (item.id === 'destinations') setActiveSubItem('itinerary-builder');
                    else if (item.id === 'blog') setActiveSubItem('write-post');
                    else if (item.id === 'about') setActiveSubItem('our-story');
                    else if (item.id === 'contact') setActiveSubItem('contact-form');
                    else if (item.id === 'home') setActiveSubItem('overview');
                  }}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-600'
                      : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="flex items-center space-x-2 p-2 bg-white rounded-lg hover:bg-gray-100">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <span className="hidden md:block text-sm text-gray-700">John Doe</span>
              </button>
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="md:hidden p-2 bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Vertical Sidebar */}
        <aside className={`bg-white shadow-lg transition-all duration-300 ${
          sidebarCollapsed ? 'w-16' : 'w-64'
        } flex-shrink-0 border-r`}>
          <div className="p-4">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between mb-6">
              {!sidebarCollapsed && (
                <h2 className="text-lg font-semibold text-gray-900">
                  {currentSidebarItems.title}
                </h2>
              )}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-1 bg-white rounded-md hover:bg-gray-100"
              >
                {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <X className="h-4 w-4" />}
              </button>
            </div>

            {/* Sidebar Navigation */}
            <nav className="space-y-2">
              {currentSidebarItems.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSubItem(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                    activeSubItem === item.id
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                  title={sidebarCollapsed ? item.label : ''}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5 flex-shrink-0" />
                    {!sidebarCollapsed && (
                      <span className="text-sm font-medium">{item.label}</span>
                    )}
                  </div>
                  
                  {!sidebarCollapsed && (
                    <div className="flex items-center space-x-2">
                      {item.badge && (
                        <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      {item.count && (
                        <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </div>
                  )}
                </button>
              ))}
            </nav>

            {/* Quick Actions */}
            {!sidebarCollapsed && (
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Quick Start</h3>
                <p className="text-xs text-gray-600 mb-3">
                  Plan your next adventure in minutes
                </p>
                <button className="w-full bg-blue-600 text-white text-sm py-2 px-3 rounded-md hover:bg-blue-700 transition-colors">
                  Create New Trip
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
              <span className="capitalize">{activeSection}</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gray-900 capitalize">
                {activeSubItem.replace('-', ' ')}
              </span>
            </nav>

            {/* Page Content */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900 capitalize">
                  {currentContent.title}
                </h1>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                    Save Draft
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                    Publish
                  </button>
                </div>
              </div>

              {/* Dynamic Content */}
              {currentContent.content}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppComponent;
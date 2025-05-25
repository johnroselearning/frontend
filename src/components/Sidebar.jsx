// import { NavLink } from 'react-router-dom';
// import { FaTachometerAlt, FaMapMarkedAlt, FaCalendarAlt, FaCog, FaPlane  } from 'react-icons/fa';

// const Sidebar = () => {
//   return (
//     <div className="w-60 bg-gray-900 text-white p-4 fixed left-0 top-0 h-screen overflow-y-auto">
//       <h2 className="text-2xl font-bold mb-6">ExploreMunnar</h2>
//       <nav className="flex flex-col space-y-4">
//         <NavLink 
//           to="/" 
//           className={({ isActive }) => 
//             `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
//           }
//         >
//           <FaTachometerAlt className="mr-2" />Dashboard
//         </NavLink>

//         <NavLink to="/travel-model" className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}>
//           <FaPlane className="inline mr-2" />Travel Model
//         </NavLink>
//         <NavLink 
//           to="/places" 
//           className={({ isActive }) => 
//             `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
//           }
//         >
//           <FaMapMarkedAlt className="mr-2" />Places
//         </NavLink>
//         <NavLink 
//           to="/bookings" 
//           className={({ isActive }) => 
//             `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
//           }
//         >
//           <FaCalendarAlt className="mr-2" />Bookings
//         </NavLink>
//         <NavLink 
//           to="/settings" 
//           className={({ isActive }) => 
//             `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
//           }
//         >
//           <FaCog className="mr-2" />Settings
//         </NavLink>
//         <NavLink 
//           to="/chatbot" 
//           className={({ isActive }) => 
//             `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
//           }
//         >
//           <FaCog className="mr-2" />Chatbot
//         </NavLink>
//          <NavLink 
//           to="/blogSection" 
//           className={({ isActive }) => 
//             `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
//           }
//         >
//           <FaCog className="mr-2" />Blog
//         </NavLink>

//          <NavLink 
//           to="/generateItinerary" 
//           className={({ isActive }) => 
//             `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
//           }
//         >
//           <FaCog className="mr-2" />Generate Itineary
//         </NavLink>

//         <NavLink 
//           to="/KeralaGuide" 
//           className={({ isActive }) => 
//             `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
//           }
//         >
//           <FaCog className="mr-2" />Kerala Guide
//         </NavLink>

//          <NavLink 
//           to="/Kerala" 
//           className={({ isActive }) => 
//             `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
//           }
//         >
//           <FaCog className="mr-2" />Kerala
//         </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


import { NavLink } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaMapMarkedAlt, 
  FaCalendarAlt, 
  FaCog, 
  FaPlane,
  FaComments,
  FaBlog,
  FaRoute,
  FaMapSigns,
  FaGlobe
} from 'react-icons/fa';

// Configuration object for navigation items
const navigationConfig = [
  {
    id: 'dashboard',
    path: '/',
    label: 'Dashboard',
    icon: FaTachometerAlt,
    exact: true
  },
  {
    id: 'travel-model',
    path: '/travel-model',
    label: 'Travel Model',
    icon: FaPlane
  },
  {
    id: 'places',
    path: '/places',
    label: 'Places',
    icon: FaMapMarkedAlt
  },
  {
    id: 'bookings',
    path: '/bookings',
    label: 'Bookings',
    icon: FaCalendarAlt
  },
  {
    id: 'chatbot',
    path: '/chatbot',
    label: 'Chatbot',
    icon: FaComments
  },
  {
    id: 'blogsection',
    path: '/blogSection',
    label: 'Blog',
    icon: FaBlog
  },
  {
    id: 'bloglayout',
    path: '/blogLayout',
    label: 'Blog Layout',
    icon: FaBlog
  },
  {
    id: 'itinerary',
    path: '/generateItinerary',
    label: 'Generate Itinerary',
    icon: FaRoute
  },
  {
    id: 'kerala-guide',
    path: '/KeralaGuide',
    label: 'Kerala Guide',
    icon: FaMapSigns
  },
  {
    id: 'kerala',
    path: '/Kerala',
    label: 'Kerala',
    icon: FaGlobe
  },
  {
    id: 'settings',
    path: '/settings',
    label: 'Settings',
    icon: FaCog
  }
];

// Reusable NavItem Component
const NavItem = ({ item }) => {
  const IconComponent = item.icon;
  
  return (
    <NavLink
      to={item.path}
      end={item.exact}
      className={({ isActive }) =>
        `flex items-center px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-800 ${
          isActive 
            ? 'text-blue-400 bg-gray-800 border-r-2 border-blue-400' 
            : 'text-gray-300 hover:text-white'
        }`
      }
      aria-label={item.label}
    >
      <IconComponent className="mr-3 text-lg flex-shrink-0" />
      <span className="font-medium">{item.label}</span>
    </NavLink>
  );
};

// Main Sidebar Component
const Sidebar = ({ 
  title = "ExploreMunnar", 
  navigationItems = navigationConfig,
  className = "",
  collapsed = false 
}) => {
  return (
    <div className={`
      ${collapsed ? 'w-16' : 'w-60'} 
      bg-gray-900 text-white p-4 fixed left-0 top-0 h-screen overflow-y-auto 
      transition-all duration-300 ease-in-out border-r border-gray-700
      ${className}
    `}>
      {/* Header */}
      <div className="mb-8">
        <h2 className={`
          font-bold text-center transition-all duration-300
          ${collapsed ? 'text-sm' : 'text-2xl'}
        `}>
          {collapsed ? 'EM' : title}
        </h2>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navigationItems.map((item) => (
          <NavItem key={item.id} item={item} />
        ))}
      </nav>

      {/* Footer/Brand */}
      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-xs text-gray-400 text-center border-t border-gray-700 pt-4">
            © 2024 ExploreMunnar
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

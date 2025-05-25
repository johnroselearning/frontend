// import { NavLink } from 'react-router-dom';
// import { FaTachometerAlt, FaMapMarkedAlt, FaCalendarAlt, FaCog } from 'react-icons/fa';

// const Sidebar = () => {
//   return (
//     <div style={{ 
//       width: '240px', 
//       backgroundColor: '#1f2937', 
//       color: 'white',
//       padding: '16px',
//       position: 'fixed',
//       left: 0,
//       top: 0,
//       height: '100vh',
//       overflowY: 'auto'
//     }}>
//       <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>ExploreMunnar</h2>
//       <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//         <NavLink to="/" style={({ isActive }) => ({ 
//           color: isActive ? '#60a5fa' : 'white',
//           display: 'flex',
//           alignItems: 'center'
//         })}>
//           <FaTachometerAlt style={{ marginRight: '8px' }} />Dashboard
//         </NavLink>
//         <NavLink to="/places" style={({ isActive }) => ({ 
//           color: isActive ? '#60a5fa' : 'white',
//           display: 'flex',
//           alignItems: 'center'
//         })}>
//           <FaMapMarkedAlt style={{ marginRight: '8px' }} />Places
//         </NavLink>
//         <NavLink to="/bookings" style={({ isActive }) => ({ 
//           color: isActive ? '#60a5fa' : 'white',
//           display: 'flex',
//           alignItems: 'center'
//         })}>
//           <FaCalendarAlt style={{ marginRight: '8px' }} />Bookings
//         </NavLink>
//         <NavLink to="/settings" style={({ isActive }) => ({ 
//           color: isActive ? '#60a5fa' : 'white',
//           display: 'flex',
//           alignItems: 'center'
//         })}>
//           <FaCog style={{ marginRight: '8px' }} />Settings
//         </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaMapMarkedAlt, FaCalendarAlt, FaCog, FaPlane  } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-900 text-white p-4 fixed left-0 top-0 h-screen overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">ExploreMunnar</h2>
      <nav className="flex flex-col space-y-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
          }
        >
          <FaTachometerAlt className="mr-2" />Dashboard
        </NavLink>

        <NavLink to="/travel-model" className={({ isActive }) => isActive ? "text-blue-400" : "text-white"}>
          <FaPlane className="inline mr-2" />Travel Model
        </NavLink>
        <NavLink 
          to="/places" 
          className={({ isActive }) => 
            `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
          }
        >
          <FaMapMarkedAlt className="mr-2" />Places
        </NavLink>
        <NavLink 
          to="/bookings" 
          className={({ isActive }) => 
            `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
          }
        >
          <FaCalendarAlt className="mr-2" />Bookings
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) => 
            `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
          }
        >
          <FaCog className="mr-2" />Settings
        </NavLink>
        <NavLink 
          to="/chatbot" 
          className={({ isActive }) => 
            `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
          }
        >
          <FaCog className="mr-2" />Chatbot
        </NavLink>
         <NavLink 
          to="/blogSection" 
          className={({ isActive }) => 
            `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
          }
        >
          <FaCog className="mr-2" />Blog
        </NavLink>

         <NavLink 
          to="/generateItinerary" 
          className={({ isActive }) => 
            `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
          }
        >
          <FaCog className="mr-2" />Generate Itineary
        </NavLink>

        <NavLink 
          to="/KeralaGuide" 
          className={({ isActive }) => 
            `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
          }
        >
          <FaCog className="mr-2" />Kerala Guide
        </NavLink>

         <NavLink 
          to="/Kerala" 
          className={({ isActive }) => 
            `flex items-center ${isActive ? 'text-blue-400' : 'text-white'}`
          }
        >
          <FaCog className="mr-2" />Kerala
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

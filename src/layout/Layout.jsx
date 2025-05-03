// import Sidebar from '../components/Sidebar';
// import { Outlet } from 'react-router-dom';

// const Layout = () => {
//   return (
//     <div className="flex h-screen overflow-hidden">
//       <Sidebar />
//       <main className="flex-1 ml-60 p-6 bg-gray-800 text-white overflow-y-auto">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default Layout;


// const Layout = () => {
//   return (
//     <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
//       <Sidebar />
//       <main style={{ 
//         flexGrow: 1, 
//         marginLeft: '240px', 
//         padding: '24px',
//         backgroundColor: '#1f2937', 
//         color: 'white',
//         overflowY: 'auto' 
//       }}>
//         <Outlet />
//       </main>
//     </div>
//   );
// };


// import Sidebar from '../components/Sidebar';
// import { Outlet } from 'react-router-dom';

// const Layout = () => {
//   return (
//     <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
//       <Sidebar />
//       <main style={{ 
//         marginLeft: '240px', 
//         flexGrow: 1,
//         padding: '24px',
//         backgroundColor: '#374151',
//         color: 'white'
//       }}>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default Layout;


import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex w-full h-screen" style={{ width: '100%', height: '100vh' }}>
      <Sidebar />
      <main style={{ 
        marginLeft: '240px', 
        flexGrow: 1,
        padding: '24px',
        backgroundColor: '#374151',
        color: 'white'
      }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

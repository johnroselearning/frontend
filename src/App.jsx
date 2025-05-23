// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './layout/Layout';
// import Dashboard from './pages/Dashboard';
// import Places from './pages/Places';
// import Bookings from './pages/Bookings';
// import Settings from './pages/Settings';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route element={<Layout />}>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/places" element={<Places />} />
//           <Route path="/bookings" element={<Bookings />} />
//           <Route path="/settings" element={<Settings />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Places from './pages/Places';
import Bookings from './pages/Bookings';
import Settings from './pages/Settings';
import ChatBot from './pages/ChatBot';
import BlogSection from './pages/BlogSection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="places" element={<Places />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="settings" element={<Settings />} />
          <Route path="chatbot" element={<ChatBot />} />
          <Route path="blogsection" element={<BlogSection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


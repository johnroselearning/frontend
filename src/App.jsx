
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Dashboard from './pages/Dashboard';
import Places from './pages/Places';
import Bookings from './pages/Bookings';
import Settings from './pages/Settings';
import ChatBot from './pages/ChatBot';
import BlogSection from './pages/BlogSection';
import GenerateItinerary from './pages/GenerateItinerary';
import KeralaGuide from "./pages/KeralaGuide";
import Kerala from "./routes/Kerala";
import BlogLayout from './components/BlogLayout';

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
          <Route path="generateItinerary" element={<GenerateItinerary />} />
          <Route path="KeralaGuide" element={<KeralaGuide />} />
          <Route path="Kerala" element={<Kerala />} />
          <Route path="/bloglayout/*" element={<BlogLayout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


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
import { TranslationProvider } from './contexts/TranslationContext'; // Import the provider
import AppComponent from './tool_component/AppComponent';
import TravelHomepage from './tool_component/TravelHomepage';

function App() {
  console.log("App component rendered");
  return (
    <Router>
        <TranslationProvider>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        {/* <Route path="/" element={<AppComponent />} /> */}
        <Route path="/" element={<TravelHomepage />} />
        
        
          {/* <Route index element={<Dashboard />} />
          <Route path="places" element={<Places />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="settings" element={<Settings />} />
          <Route path="chatbot" element={<ChatBot />} /> */}
          <Route path="blogsection" element={<BlogSection />} />
          <Route path="generateItinerary" element={<GenerateItinerary />} />
          <Route path="KeralaGuide" element={<KeralaGuide />} />
          <Route path="Kerala" element={<Kerala />} />
          <Route path="/bloglayout/*" element={<BlogLayout />} />
          <Route path="/blog/*" element={<BlogLayout />} />
          <Route path="/itinerary-builder/*" element={<AppComponent />} />

          
          {/* <Route path="/post/*" element={<BlogLayout />} /> */}
        {/* </Route> */}
      </Routes>
      </TranslationProvider>
    </Router>
  );
}

export default App;


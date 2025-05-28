import { Link } from 'react-router-dom'
import BlogLayout from './components/BlogLayout';

export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center bg-white shadow">
      <Link to="/" className="text-xl font-bold">ExploreKeralite</Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-primary">Home</Link>
         <Link to="/Appcomponent" className="hover:text-primary">Itinerary Builder</Link>
        <Link to="/destinations" className="hover:text-primary">Destinations</Link>
        <Link to="/bloglayout" className="hover:text-primary">Blog</Link>
        <Link to="/about" className="hover:text-primary">About</Link>
        <Link to="/contact" className="hover:text-primary">Contact</Link>
      </div>
    </nav>
  )
}

import React, { useState } from 'react';
import { Mountain, Tent, Car, MapPin, Star, Phone, Mail, Calendar, Users, Clock, Shield, CheckCircle, Plus, X } from 'lucide-react';

const Advenure = () => {
  const [activeTab, setActiveTab] = useState('explore');
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [registrationType, setRegistrationType] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    location: '',
    description: '',
    facilities: [],
    pricing: ''
  });

  const campingPlaces = [
    {
      id: 1,
      name: "Mountain Vista Camp",
      location: "Rocky Mountains, Colorado",
      rating: 4.8,
      price: "$45/night",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
      facilities: ["WiFi", "Restrooms", "Fire Pit", "Parking"],
      safariPartner: "Alpine Jeep Adventures"
    },
    {
      id: 2,
      name: "Desert Oasis Camping",
      location: "Moab, Utah",
      rating: 4.9,
      price: "$38/night",
      image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=400&h=300&fit=crop",
      facilities: ["Showers", "Store", "Guided Tours", "Equipment Rental"],
      safariPartner: "Red Rock Safari Co."
    },
    {
      id: 3,
      name: "Forest Edge Retreat",
      location: "Yellowstone, Wyoming",
      rating: 4.7,
      price: "$52/night",
      image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=400&h=300&fit=crop",
      facilities: ["Restaurant", "Hiking Trails", "Lake Access", "Pet Friendly"],
      safariPartner: "Wilderness Jeep Tours"
    }
  ];

  const safariPackages = [
    {
      id: 1,
      name: "Adventure Explorer",
      duration: "4 hours",
      difficulty: "Moderate",
      price: "$89/person",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
      highlights: ["Scenic Overlooks", "Wildlife Spotting", "Photo Stops", "Professional Guide"]
    },
    {
      id: 2,
      name: "Extreme Off-Road",
      duration: "6 hours",
      difficulty: "Challenging",
      price: "$129/person",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      highlights: ["Rock Crawling", "River Crossing", "Remote Trails", "Lunch Included"]
    },
    {
      id: 3,
      name: "Sunset Safari",
      duration: "3 hours",
      difficulty: "Easy",
      price: "$69/person",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      highlights: ["Golden Hour Views", "Photography Focus", "Snacks Provided", "All Ages Welcome"]
    }
  ];

  const handleRegistration = (type) => {
    setRegistrationType(type);
    setShowRegistrationModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFacilityToggle = (facility) => {
    setFormData(prev => ({
      ...prev,
      facilities: prev.facilities.includes(facility)
        ? prev.facilities.filter(f => f !== facility)
        : [...prev.facilities, facility]
    }));
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Registration submitted:', { type: registrationType, data: formData });
    alert(`${registrationType} registration submitted successfully! We'll contact you within 24 hours.`);
    setShowRegistrationModal(false);
    setFormData({
      businessName: '',
      contactPerson: '',
      email: '',
      phone: '',
      location: '',
      description: '',
      facilities: [],
      pricing: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-green-800 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Adventure Awaits</h1>
            <p className="text-xl mb-6">Discover the perfect blend of camping and off-road jeep safaris</p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleRegistration('Camping Place')}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                Register Camping Site
              </button>
              <button 
                onClick={() => handleRegistration('Safari Company')}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition duration-300"
              >
                Register Safari Tours
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          <Mountain className="h-full w-full" />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'explore', label: 'Explore', icon: Mountain },
              { id: 'camping', label: 'Camping', icon: Tent },
              { id: 'safari', label: 'Jeep Safari', icon: Car }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition duration-300 ${
                  activeTab === id
                    ? 'border-green-600 text-green-600'
                    : 'border-transparent text-gray-600 hover:text-green-600'
                }`}
              >
                <Icon size={20} />
                <span className="font-semibold">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Explore Tab */}
        {activeTab === 'explore' && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Complete Adventure Packages</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the ultimate outdoor adventure with our integrated camping and safari packages. 
                Stay at our affiliated camping sites and enjoy thrilling off-road jeep safaris.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {campingPlaces.map(camp => (
                <div key={camp.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <img src={camp.image} alt={camp.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{camp.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{camp.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <MapPin size={16} />
                      <span className="text-sm">{camp.location}</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Safari Partner:</p>
                      <p className="text-sm font-semibold text-blue-600">{camp.safariPartner}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {camp.facilities.map(facility => (
                        <span key={facility} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {facility}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">{camp.price}</span>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Camping Tab */}
        {activeTab === 'camping' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">Affiliated Camping Places</h2>
              <button 
                onClick={() => handleRegistration('Camping Place')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Join Our Network</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {campingPlaces.map(camp => (
                <div key={camp.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img src={camp.image} alt={camp.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{camp.name}</h3>
                    <div className="flex items-center space-x-2 text-gray-600 mb-4">
                      <MapPin size={18} />
                      <span>{camp.location}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {camp.facilities.map(facility => (
                        <div key={facility} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">{facility}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-green-600">{camp.price}</span>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{camp.rating} rating</span>
                        </div>
                      </div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Safari Tab */}
        {activeTab === 'safari' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">Off-Road Jeep Safari Adventures</h2>
              <button 
                onClick={() => handleRegistration('Safari Company')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center space-x-2"
              >
                <Plus size={20} />
                <span>Partner With Us</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safariPackages.map(pkg => (
                <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock size={16} />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        pkg.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                        pkg.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {pkg.difficulty}
                      </span>
                    </div>
                    <div className="space-y-2 mb-4">
                      {pkg.highlights.map(highlight => (
                        <div key={highlight} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">{pkg.price}</span>
                      <button 
                        onClick={() => setSelectedPackage(pkg)}
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition duration-300"
                      >
                        Book Safari
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-screen overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-gray-800">
                Register Your {registrationType}
              </h3>
              <button
                onClick={() => setShowRegistrationModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  placeholder={`Describe your ${registrationType.toLowerCase()}...`}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {registrationType === 'Camping Place' ? 'Facilities' : 'Services'} *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {(registrationType === 'Camping Place' 
                    ? ['WiFi', 'Restrooms', 'Showers', 'Fire Pit', 'Parking', 'Store', 'Restaurant', 'Pet Friendly']
                    : ['4x4 Vehicles', 'Professional Guides', 'Safety Equipment', 'Photography', 'Meals', 'Insurance']
                  ).map(facility => (
                    <button
                      key={facility}
                      type="button"
                      onClick={() => handleFacilityToggle(facility)}
                      className={`p-2 text-sm rounded-lg border transition duration-300 ${
                        formData.facilities.includes(facility)
                          ? 'bg-green-600 text-white border-green-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-green-600'
                      }`}
                    >
                      {facility}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Starting Price *
                </label>
                <input
                  type="text"
                  name="pricing"
                  value={formData.pricing}
                  onChange={handleInputChange}
                  required
                  placeholder={registrationType === 'Camping Place' ? 'e.g., $45/night' : 'e.g., $89/person'}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
                />
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowRegistrationModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={submitRegistration}
                  className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-300"
                >
                  Submit Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Package Details Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">{selectedPackage.name}</h3>
              <button
                onClick={() => setSelectedPackage(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <img src={selectedPackage.image} alt={selectedPackage.name} className="w-full h-48 object-cover rounded-lg mb-4" />
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{selectedPackage.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Difficulty:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    selectedPackage.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    selectedPackage.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {selectedPackage.difficulty}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price:</span>
                  <span className="text-xl font-bold text-blue-600">{selectedPackage.price}</span>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">What's Included:</h4>
                <div className="space-y-2">
                  {selectedPackage.highlights.map(highlight => (
                    <div key={highlight} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => {
                  alert('Booking functionality would be implemented here!');
                  setSelectedPackage(null);
                }}
                className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition duration-300"
              >
                Book This Safari
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Adventure Travel</h3>
              <p className="text-gray-300">Your gateway to unforgettable camping and safari experiences.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white">Camping Places</a>
                <a href="#" className="block text-gray-300 hover:text-white">Safari Tours</a>
                <a href="#" className="block text-gray-300 hover:text-white">Partner Registration</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-300 hover:text-white">Help Center</a>
                <a href="#" className="block text-gray-300 hover:text-white">Safety Guidelines</a>
                <a href="#" className="block text-gray-300 hover:text-white">Booking Terms</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>1-800-ADVENTURE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>info@adventuretravel.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Adventure Travel Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Advenure;
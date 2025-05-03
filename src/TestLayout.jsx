import React from 'react';

const TestLayout = () => {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ 
        width: '240px', 
        backgroundColor: '#1f2937', 
        color: 'white',
        padding: '16px',
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh'
      }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>ExploreMunnar</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a href="#" style={{ color: 'white' }}>Dashboard</a>
          <a href="#" style={{ color: 'white' }}>Places</a>
          <a href="#" style={{ color: 'white' }}>Bookings</a>
          <a href="#" style={{ color: 'white' }}>Settings</a>
        </div>
      </div>
      
      {/* Main Content */}
      <div style={{ 
        marginLeft: '240px', 
        flexGrow: 1,
        padding: '24px',
        backgroundColor: '#374151',
        color: 'white'
      }}>
        <h1>Main Content Area</h1>
        <p>This is where your page content would go.</p>
      </div>
    </div>
  );
};

export default TestLayout;

import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-176 bg-gray-100 p-8">
      <h1 className="text-4xl text-black font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-700">Learn more about our mission and vision.</p>
    </div>
  );
};

export default About;
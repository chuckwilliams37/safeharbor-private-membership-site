import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-hero-pattern">
      <h1 className="text-5xl text-center text-white font-bold">
        SafeHarbor: Your Annual Haven and Community Membership
      </h1>
      <h2 className="text-white text-lg mt-4 text-center">
       Embrace Your Yearly Haven
      </h2>
      <h2 className="text-white text-lg mt-4 text-center">
       Annual Camping on Oak-Covered Acres Join us for your week-long sojourn on 52 lush acres of oak forest. Reconnect with nature, rejuvenate your spirit, and enjoy the camaraderie of fellow freedom fighters. Here, you're not just booking a vacation; you're securing your annual place in a community that cherishes the land and values independence.
      </h2>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
        Join SafeHarbor Today and Secure Your Annual Refuge
      </button>
    </div>
  );
};

export default HeroSection;
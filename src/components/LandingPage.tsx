// pages/index.tsx
import React from 'react';
import Head from 'next/head';

const LandingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>SafeHarbor - Your Private Membership Community</title>
      </Head>
      <div className="container mx-auto p-4">
        {/* Hero section */}
        <section className="text-center py-12 bg-gray-200">
          <h1 className="text-4xl font-bold mb-3">A United Front as Your Private Membership Haven in Uncertainty</h1>
          <p className="mb-6">In moments when the future seems unsure, SafeHarbor emerges as your dependable retreat.</p>
          <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded hover:bg-blue-700 transition duration-300">Join SafeHarbor Today</button>
        </section>

        {/* Features section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6">Claim Your Annual Camping Retreat</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Week-long sojourn on 52 lush acres of oak forest</li>
            <li>Reconnect with nature and rejuvenate your spirit</li>
            <li>Cherish independence in a community that values the land</li>
          </ul>

          <h2 className="text-3xl font-bold mb-6">All the Essentials, Close to Civilization</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Off-grid living with modern amenities</li>
            <li>Full-service cabin and RV hookups</li>
            <li>Convenient access to local grocery stores and services</li>
          </ul>
          
          {/* ... Additional sections ... */}

        </section>

        {/* More sections would be added here with similar structure */}

      </div>
    </>
  );
};

export default LandingPage;
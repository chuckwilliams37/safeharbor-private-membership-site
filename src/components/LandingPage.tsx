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
        <section className="bg-gray-200 py-12 text-center">
          <h1 className="mb-3 text-4xl font-bold">
            Your Private Membership Emergency Support Team & Oak Forested Haven
            Retreat
          </h1>
          <p className="mb-6">
            In moments of crisis when the future seems unsure, SafeHarbor
            emerges as your Florida oak forest retreat to gather together and
            support one another.
          </p>
          <button className="rounded bg-blue-600 px-6 py-2 font-bold text-white transition duration-300 hover:bg-blue-700">
            Join SafeHarbor Today
          </button>
        </section>

        {/* Features section */}
        <section className="py-12">
          <h2 className="mb-6 text-3xl font-bold">
            Claim Your Annual Camping Retreat
          </h2>
          <ul className="mb-6 list-disc space-y-2 pl-5">
            <li>Week-long sojourn on 52 lush acres of oak forest</li>
            <li>Reconnect with nature and rejuvenate your spirit</li>
            <li>Cherish independence in a community that values the land</li>
          </ul>

          <h2 className="mb-6 text-3xl font-bold">
            All the Essentials, Close to Civilization
          </h2>
          <ul className="mb-6 list-disc space-y-2 pl-5">
            <li>Off-grid living with modern amenities</li>
            <li>Full-service cabin and RV hookups</li>
            <li>Convenient access to local grocery stores and services</li>
          </ul>

          {/* ... Additional sections ... */}
        </section>

        {/* More sections would be added here with similar structure */}
      </div>
    </>
  )
};

export default LandingPage;
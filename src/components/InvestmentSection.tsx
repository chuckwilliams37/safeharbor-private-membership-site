import React from 'react';

const InvestmentSection: React.FC = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Invest in a Resilient Future</h2>
        <p>
          Your membership with SafeHarbor is more than access—it's a commitment to a like-minded community. Whether SafeHarbor is your Plan A or Plan B, you are part of a network ready to face, adapt, and thrive.
        </p>
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Secure Your Place Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
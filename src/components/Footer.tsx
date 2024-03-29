import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Voluntaria: SafeHarbor Private Membership Plan. All rights reserved.</p>
      </div>
    </footer>
  );
};
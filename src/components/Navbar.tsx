import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold">
          <Link href="/">
            SafeHarbor
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/about">
            About
          </Link>
          <Link href="/membership">
            Membership
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
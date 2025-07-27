import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/ui/Sidebar';
import Header from '../../components/ui/Header';
import MobileNav from '../../components/ui/MobileNav';

const DashboardLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
      
      <div className="lg:ml-60">
        <Header onMenuToggle={toggleMobileMenu} isMobileMenuOpen={mobileMenuOpen} />
        
        <main className="p-4 lg:p-6 pb-20 lg:pb-6">
          <Outlet />
        </main>
      </div>

      <MobileNav />
    </div>
  );
};

export default DashboardLayout;
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const MobileNav = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    {
      label: 'Home',
      href: '/dashboard',
      icon: 'Home'
    },
    {
      label: 'Products',
      href: '/dashboard/products',
      icon: 'Package'
    },
    {
      label: 'Analytics',
      href: '/dashboard/analytics',
      icon: 'BarChart3'
    },
    {
      label: 'Payouts',
      href: '/dashboard/payouts',
      icon: 'Wallet'
    },
    {
      label: 'Settings',
      href: '/dashboard/checkout',
      icon: 'Settings'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-surface border-t border-border md:hidden z-50">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
              pathname === item.href || (pathname === '/dashboard' && item.href === '/dashboard')
                ? 'text-accent bg-accent/10' :'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon 
              name={item.icon} 
              size={20} 
              className={pathname === item.href || (pathname === '/dashboard' && item.href === '/dashboard') ? 'text-accent' : 'text-text-secondary'}
            />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
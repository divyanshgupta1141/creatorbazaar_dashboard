import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const Sidebar = ({ isOpen, onToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const navigationItems = [
    {
      label: 'Home',
      href: '/dashboard',
      icon: 'Home',
      tooltip: 'Overview and quick actions'
    },
    {
      label: 'Products',
      href: '/dashboard/products',
      icon: 'Package',
      tooltip: 'Manage your digital products'
    },
    {
      label: 'Analytics',
      href: '/dashboard/analytics',
      icon: 'BarChart3',
      tooltip: 'Sales performance insights'
    },
    {
      label: 'Upload Product',
      href: '/dashboard/upload-product',
      icon: 'Upload',
      tooltip: 'Upload and manage your products'
    },
    {
      label: 'Checkout',
      href: '/dashboard/checkout',
      icon: 'CreditCard',
      tooltip: 'Payment and checkout settings'
    },
    {
      label: 'Payouts',
      href: '/dashboard/payouts',
      icon: 'Wallet',
      tooltip: 'Track earnings and withdrawals'
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`fixed left-0 top-0 z-40 h-full bg-surface border-r border-border transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:w-60 w-60`}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="flex items-center px-6 py-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} color="white" />
              </div>
              <div>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-xl font-bold">
                  CreatorBazaar
                </h1>
                <p className="text-xs text-text-secondary">Home</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    onToggle();
                  }
                }}
                className={`flex gap-3 items-center py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-accent/10 ${
                  pathname === item.href || (pathname === '/dashboard' && item.href === '/dashboard')
                    ? 'bg-accent/10 border-l-4 border-accent text-accent' :'text-text-secondary hover:text-text-primary'
                }`}
                title={item.tooltip}
              >
                <Icon 
                  name={item.icon} 
                  size={20} 
                  className={pathname === item.href || (pathname === '/dashboard' && item.href === '/dashboard') ? 'text-accent' : 'text-text-secondary'}
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-success to-accent rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} color="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary truncate">Creator Account</p>
                  <p className="text-xs text-text-secondary truncate">Pro Plan</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 rounded-lg hover:bg-muted transition-all duration-300"
                title="Logout"
              >
                <Icon name="LogOut" size={16} className="text-text-secondary" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default Sidebar;
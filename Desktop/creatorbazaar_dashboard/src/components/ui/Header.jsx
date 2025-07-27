import React from 'react';
import Icon from '../AppIcon';

const Header = ({ onMenuToggle, isMobileMenuOpen }) => {
  return (
    <header className="sticky top-0 z-30 bg-surface border-b border-border">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">
        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-micro"
            aria-label="Toggle navigation menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-text-primary"
            />
          </button>
          
          {/* Welcome Message */}
          <div className="hidden sm:block">
            <h2 className="text-lg font-semibold text-text-primary">
              Namaste, Creator! 🙏
            </h2>
            <p className="text-sm text-text-secondary">
              Ready to grow your digital business today?
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center bg-muted rounded-lg px-3 py-2 min-w-64">
            <Icon name="Search" size={16} className="text-text-secondary mr-2" />
            <input
              type="text"
              placeholder="Search products, analytics..."
              className="bg-transparent border-none outline-none text-sm text-text-primary placeholder-text-secondary flex-1"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-muted transition-micro">
            <Icon name="Bell" size={20} className="text-text-secondary" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-error rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            </span>
          </button>

          {/* Help */}
          <button className="p-2 rounded-lg hover:bg-muted transition-micro">
            <Icon name="HelpCircle" size={20} className="text-text-secondary" />
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
              <Icon name="User" size={16} color="white" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-text-primary">Creator</p>
              <p className="text-xs text-text-secondary">Pro Plan</p>
            </div>
            <button className="p-1 rounded hover:bg-muted transition-micro">
              <Icon name="ChevronDown" size={16} className="text-text-secondary" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
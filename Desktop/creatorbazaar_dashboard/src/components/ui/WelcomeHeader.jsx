import React from 'react';
import Icon from '../AppIcon';

const WelcomeHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          Welcome back to CreatorBazaar
        </h1>
        <p className="text-text-secondary mt-1">Ready to grow your digital business today? 🚀</p>
      </div>
      <div className="flex gap-4 items-center">
        <button className="p-2 rounded-lg hover:bg-muted transition-all duration-300">
          <Icon name="Bell" size={20} className="text-text-secondary" />
        </button>
        <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-semibold">CB</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
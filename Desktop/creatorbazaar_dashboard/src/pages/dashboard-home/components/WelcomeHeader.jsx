import React from 'react';
import Icon from '../../../components/AppIcon';

const WelcomeHeader = () => {
  const currentTime = new Date().getHours();
  const greeting = currentTime < 12 ? 'Good Morning' : currentTime < 17 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 mb-8 border border-primary/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
            <Icon name="User" size={24} color="white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-text-primary">
              Namaste, Creator! 🙏
            </h1>
            <p className="text-text-secondary">
              {greeting}! Ready to grow your digital bazaar today?
            </p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-text-secondary">Total Earnings</p>
            <p className="text-xl font-bold gradient-text">₹12,450</p>
          </div>
          <div className="w-px h-8 bg-border"></div>
          <div className="text-right">
            <p className="text-sm text-text-secondary">This Month</p>
            <p className="text-xl font-bold text-success">₹3,200</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 flex items-center space-x-6 md:hidden">
        <div className="text-center">
          <p className="text-sm text-text-secondary">Total Earnings</p>
          <p className="text-lg font-bold gradient-text">₹12,450</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-text-secondary">This Month</p>
          <p className="text-lg font-bold text-success">₹3,200</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;
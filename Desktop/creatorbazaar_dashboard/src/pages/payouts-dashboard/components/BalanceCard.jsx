import React from 'react';
import Icon from '../../../components/AppIcon';

const BalanceCard = ({ balance }) => {
  return (
    <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl text-white mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Current Balance</h2>
        <Icon name="Wallet" size={24} color="white" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm opacity-80">Available</p>
          <p className="text-2xl font-bold">₹{balance.available.toLocaleString('en-IN')}</p>
        </div>
        
        <div className="text-center md:text-left">
          <p className="text-sm opacity-80">Pending</p>
          <p className="text-xl font-semibold">₹{balance.pending.toLocaleString('en-IN')}</p>
        </div>
        
        <div className="text-center md:text-left">
          <p className="text-sm opacity-80">Total Earned</p>
          <p className="text-xl font-semibold">₹{balance.total.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
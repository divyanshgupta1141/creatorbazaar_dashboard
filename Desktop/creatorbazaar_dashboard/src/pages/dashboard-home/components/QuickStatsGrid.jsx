import React from 'react';
import Icon from '../../../components/AppIcon';

const QuickStatsGrid = () => {
  const stats = [
    {
      label: "Products",
      value: "8",
      change: "+2 this week",
      icon: "Package",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      label: "Orders",
      value: "24",
      change: "+5 today",
      icon: "ShoppingCart",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      label: "Revenue",
      value: "₹3,200",
      change: "+12% this month",
      icon: "TrendingUp",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      label: "Visitors",
      value: "156",
      change: "+8% this week",
      icon: "Users",
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-surface rounded-xl p-4 border border-border hover:shadow-lg transition-smooth">
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
              <Icon name={stat.icon} size={20} className={stat.color} />
            </div>
          </div>
          
          <div>
            <p className="text-2xl font-bold text-text-primary mb-1">{stat.value}</p>
            <p className="text-sm text-text-secondary mb-1">{stat.label}</p>
            <p className="text-xs text-success font-medium">{stat.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickStatsGrid;
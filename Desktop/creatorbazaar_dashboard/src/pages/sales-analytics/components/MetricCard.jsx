import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricCard = ({ title, value, change, changeType, icon, color = "primary" }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'success':
        return 'from-success/10 to-success/5 border-success/20';
      case 'warning':
        return 'from-warning/10 to-warning/5 border-warning/20';
      case 'accent':
        return 'from-accent/10 to-accent/5 border-accent/20';
      default:
        return 'from-primary/10 to-primary/5 border-primary/20';
    }
  };

  const getIconColor = () => {
    switch (color) {
      case 'success':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      case 'accent':
        return 'text-accent';
      default:
        return 'text-primary';
    }
  };

  return (
    <div className={`bg-gradient-to-br ${getColorClasses()} border rounded-xl p-6 hover:scale-105 transition-smooth cursor-pointer`}>
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center`}>
          <Icon name={icon} size={24} color="white" />
        </div>
        {change && (
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
            changeType === 'positive' ?'bg-success/10 text-success' 
              : changeType === 'negative' ?'bg-error/10 text-error' :'bg-muted text-text-secondary'
          }`}>
            <Icon 
              name={changeType === 'positive' ? 'TrendingUp' : changeType === 'negative' ? 'TrendingDown' : 'Minus'} 
              size={12} 
            />
            <span>{change}</span>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-text-primary mb-1">{value}</h3>
        <p className="text-sm text-text-secondary">{title}</p>
      </div>
    </div>
  );
};

export default MetricCard;
import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const ProductAnalytics = ({ analytics }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  const analyticsCards = [
    {
      title: 'Total Products',
      value: formatNumber(analytics?.totalProducts || 0),
      change: analytics?.productsChange || 0,
      icon: 'Package',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      title: 'Active Listings',
      value: formatNumber(analytics.activeProducts),
      change: analytics.activeChange,
      icon: 'CheckCircle',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      title: 'Total Revenue',
      value: formatCurrency(analytics.totalRevenue),
      change: analytics.revenueChange,
      icon: 'TrendingUp',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      title: 'Avg. Product Price',
      value: formatCurrency(analytics.avgPrice),
      change: analytics.priceChange,
      icon: 'IndianRupee',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  return (
    <div className="bg-surface rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary">Product Analytics</h2>
        <Button variant="ghost" size="sm" iconName="RefreshCw" iconSize={16}>
          Refresh
        </Button>
      </div>

      <div className="space-y-4">
        {analyticsCards.map((card, index) => (
          <div key={index} className="flex items-center p-4 bg-background rounded-lg border border-border/50">
            <div className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center mr-4`}>
              <Icon name={card.icon} size={20} className={card.color} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-text-secondary mb-1">{card.title}</p>
              <p className="text-2xl font-bold text-text-primary">{card.value}</p>
              {card.change && (
                <div className="flex items-center mt-1">
                  <Icon 
                    name={card.change > 0 ? "TrendingUp" : "TrendingDown"} 
                    size={14} 
                    className={card.change > 0 ? "text-success" : "text-error"} 
                  />
                  <span className={`text-sm ml-1 ${card.change > 0 ? "text-success" : "text-error"}`}>
                    {Math.abs(card.change)}%
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Quick Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-background rounded-lg">
            <div className="text-2xl font-bold text-primary">{formatNumber(analytics.totalDownloads)}</div>
            <div className="text-sm text-text-secondary">Total Downloads</div>
          </div>
          <div className="text-center p-3 bg-background rounded-lg">
            <div className="text-2xl font-bold text-accent">{analytics.conversionRate}%</div>
            <div className="text-sm text-text-secondary">Conversion Rate</div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Top Performing Categories</h3>
        <div className="space-y-3">
          {analytics.topCategories.map((category, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-primary mr-3"></div>
                <span className="text-sm text-text-primary">{category.name}</span>
              </div>
              <div className="text-sm font-medium text-text-primary">
                {formatCurrency(category.revenue)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductAnalytics;
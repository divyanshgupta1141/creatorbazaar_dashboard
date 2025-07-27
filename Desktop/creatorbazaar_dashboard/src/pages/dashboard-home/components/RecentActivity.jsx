import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: "sale",
      title: "New order received",
      description: "Digital Marketing Course sold to Priya Sharma",
      amount: "₹1,299",
      time: "2 minutes ago",
      icon: "ShoppingCart",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      id: 2,
      type: "product",
      title: "Product updated",
      description: "React.js Tutorial Bundle - price updated",
      time: "1 hour ago",
      icon: "Package",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 3,
      type: "payout",
      title: "Payout processed",
      description: "₹2,500 transferred to your UPI account",
      time: "3 hours ago",
      icon: "Wallet",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      id: 4,
      type: "review",
      title: "New review received",
      description: "5-star review on Web Development Masterclass",
      time: "5 hours ago",
      icon: "Star",
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  return (
    <div className="bg-surface rounded-xl border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-text-primary">Recent Activity</h2>
        <button className="text-accent hover:text-accent/80 text-sm font-medium transition-micro">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-micro">
            <div className={`w-10 h-10 rounded-lg ${activity.bgColor} flex items-center justify-center flex-shrink-0`}>
              <Icon name={activity.icon} size={18} className={activity.color} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-primary mb-1">
                    {activity.title}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {activity.description}
                  </p>
                </div>
                
                {activity.amount && (
                  <span className="text-sm font-semibold text-success ml-2">
                    {activity.amount}
                  </span>
                )}
              </div>
              
              <p className="text-xs text-text-muted mt-2">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
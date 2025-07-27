import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WorkflowTemplates = ({ onUseTemplate }) => {
  const templates = [
    {
      id: 'festival_sale',
      name: 'Festival Sale Automation',
      description: 'Automatically send festival greetings and special offers to customers',
      icon: 'Gift',
      color: 'from-warning to-error',
      trigger: 'Festival Date',
      actions: ['WhatsApp Message', 'Discount Code', 'Email Campaign'],
      popularity: 'Most Popular',
      estimatedRevenue: '25-40%'
    },
    {
      id: 'product_launch',
      name: 'Product Launch Sequence',
      description: 'Multi-step campaign for new product announcements',
      icon: 'Rocket',
      color: 'from-primary to-accent',
      trigger: 'Product Published',
      actions: ['Email Announcement', 'WhatsApp Broadcast', 'Social Media'],
      popularity: 'Trending',
      estimatedRevenue: '15-25%'
    },
    {
      id: 'customer_onboarding',
      name: 'Customer Onboarding Flow',
      description: 'Welcome new customers with helpful resources and offers',
      icon: 'UserCheck',
      color: 'from-success to-accent',
      trigger: 'New Signup',
      actions: ['Welcome Email', 'Tutorial Series', 'First Purchase Discount'],
      popularity: 'Recommended',
      estimatedRevenue: '30-45%'
    },
    {
      id: 'cart_recovery',
      name: 'Cart Abandonment Recovery',
      description: 'Win back customers who left items in their cart',
      icon: 'ShoppingCart',
      color: 'from-accent to-primary',
      trigger: 'Abandoned Cart',
      actions: ['Reminder Email', 'WhatsApp Follow-up', 'Limited Time Offer'],
      popularity: 'High Converting',
      estimatedRevenue: '20-35%'
    },
    {
      id: 'loyalty_program',
      name: 'Customer Loyalty Program',
      description: 'Reward repeat customers with exclusive benefits',
      icon: 'Heart',
      color: 'from-error to-warning',
      trigger: 'Repeat Purchase',
      actions: ['Loyalty Points', 'VIP Status', 'Exclusive Offers'],
      popularity: 'New',
      estimatedRevenue: '35-50%'
    },
    {
      id: 'review_request',
      name: 'Review & Feedback Collection',
      description: 'Automatically request reviews after successful purchases',
      icon: 'Star',
      color: 'from-warning to-success',
      trigger: 'Order Delivered',
      actions: ['Review Request', 'Feedback Form', 'Incentive Offer'],
      popularity: 'Essential',
      estimatedRevenue: '10-20%'
    }
  ];

  const getPopularityColor = (popularity) => {
    switch (popularity) {
      case 'Most Popular':
        return 'bg-error text-white';
      case 'Trending':
        return 'bg-warning text-white';
      case 'Recommended':
        return 'bg-success text-white';
      case 'High Converting':
        return 'bg-primary text-white';
      case 'New':
        return 'bg-accent text-white';
      default:
        return 'bg-muted text-text-secondary';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Workflow Templates
        </h2>
        <p className="text-text-secondary">
          Get started quickly with pre-built workflows designed for Indian creators
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-surface rounded-xl border border-border p-6 hover:card-shadow-elevated transition-smooth hover:scale-[1.02]"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 bg-gradient-to-r ${template.color} rounded-lg flex items-center justify-center`}>
                  <Icon name={template.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">{template.name}</h3>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPopularityColor(template.popularity)}`}>
                    {template.popularity}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary mb-4">
              {template.description}
            </p>

            {/* Workflow Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2">
                <Icon name="Zap" size={14} className="text-primary" />
                <span className="text-sm text-text-secondary">
                  Trigger: {template.trigger}
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Icon name="ArrowRight" size={14} className="text-accent mt-0.5" />
                <div>
                  <span className="text-sm text-text-secondary">Actions:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {template.actions.map((action, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 bg-muted text-xs text-text-secondary rounded"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Estimate */}
            <div className="bg-gradient-to-r from-success/10 to-accent/10 rounded-lg p-3 mb-4">
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={16} className="text-success" />
                <span className="text-sm font-medium text-text-primary">
                  Revenue Boost: {template.estimatedRevenue}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <Button
              variant="primary"
              fullWidth
              iconName="Plus"
              onClick={() => onUseTemplate(template)}
            >
              Use Template
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowTemplates;
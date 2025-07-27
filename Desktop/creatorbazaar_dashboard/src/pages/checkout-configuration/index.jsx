import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PaymentSettings from './components/PaymentSettings';
import CheckoutDesign from './components/CheckoutDesign';
import OrderProcessing from './components/OrderProcessing';

const CheckoutConfiguration = () => {
  const [activeTab, setActiveTab] = useState('payment');
  const [isSaving, setIsSaving] = useState(false);

  const tabs = [
    {
      id: 'payment',
      name: 'Payment Settings',
      icon: 'CreditCard',
      description: 'Configure payment methods and gateways'
    },
    {
      id: 'design',
      name: 'Checkout Design',
      icon: 'Palette',
      description: 'Customize checkout appearance and branding'
    },
    {
      id: 'processing',
      name: 'Order Processing',
      icon: 'Settings',
      description: 'Set up notifications and delivery options'
    }
  ];

  const handleSaveConfiguration = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSaving(false);
    
    // Show success notification (you can implement a toast system)
    alert('Checkout configuration saved successfully!');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'payment':
        return <PaymentSettings />;
      case 'design':
        return <CheckoutDesign />;
      case 'processing':
        return <OrderProcessing />;
      default:
        return <PaymentSettings />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div>
              <h1 className="text-2xl font-bold gradient-text">Checkout Configuration</h1>
              <p className="text-text-secondary mt-1">
                Customize your checkout experience for better conversions
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="outline">
                <Icon name="Eye" size={16} className="mr-2" />
                Preview Checkout
              </Button>
              <Button 
                variant="primary" 
                onClick={handleSaveConfiguration}
                loading={isSaving}
              >
                <Icon name="Save" size={16} className="mr-2" />
                {isSaving ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface rounded-xl p-6 card-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Conversion Rate</p>
                <p className="text-2xl font-bold text-text-primary">78.5%</p>
                <p className="text-success text-sm flex items-center mt-1">
                  <Icon name="TrendingUp" size={14} className="mr-1" />
                  +12% from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-success" />
              </div>
            </div>
          </div>
          
          <div className="bg-surface rounded-xl p-6 card-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Avg. Checkout Time</p>
                <p className="text-2xl font-bold text-text-primary">2.3 min</p>
                <p className="text-success text-sm flex items-center mt-1">
                  <Icon name="Clock" size={14} className="mr-1" />
                  -30s improvement
                </p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={24} className="text-primary" />
              </div>
            </div>
          </div>
          
          <div className="bg-surface rounded-xl p-6 card-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Payment Success</p>
                <p className="text-2xl font-bold text-text-primary">94.2%</p>
                <p className="text-success text-sm flex items-center mt-1">
                  <Icon name="CheckCircle" size={14} className="mr-1" />
                  Excellent rate
                </p>
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name="CheckCircle" size={24} className="text-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-surface rounded-xl card-shadow mb-8">
          <div className="border-b border-border">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-micro ${
                    activeTab === tab.id
                      ? 'border-accent text-accent' :'border-transparent text-text-secondary hover:text-text-primary hover:border-border'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon 
                      name={tab.icon} 
                      size={16} 
                      className={activeTab === tab.id ? 'text-accent' : 'text-text-secondary'}
                    />
                    <span>{tab.name}</span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
          
          {/* Tab Description */}
          <div className="px-6 py-4 bg-muted/30">
            <p className="text-text-secondary text-sm">
              {tabs.find(tab => tab.id === activeTab)?.description}
            </p>
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-smooth">
          {renderTabContent()}
        </div>

        {/* Mobile Tab Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border z-20">
          <div className="flex items-center justify-around py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center px-3 py-2 min-w-16 transition-micro ${
                  activeTab === tab.id
                    ? 'text-accent' :'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon 
                  name={tab.icon} 
                  size={20} 
                  className={`mb-1 ${
                    activeTab === tab.id ? 'text-accent' : 'text-text-secondary'
                  }`}
                />
                <span className="text-xs font-medium">{tab.name.split(' ')[0]}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Padding for Mobile */}
        <div className="h-20 md:hidden"></div>
      </div>
    </div>
  );
};

export default CheckoutConfiguration;
import React, { useState, useEffect } from 'react';
import PaymentSettings from '../checkout-configuration/components/PaymentSettings';
import CheckoutDesign from '../checkout-configuration/components/CheckoutDesign';
import OrderProcessing from '../checkout-configuration/components/OrderProcessing';
import Icon from '../../components/AppIcon';


const CheckoutConfiguration = () => {
  const [activeTab, setActiveTab] = useState('payment');
  const [settings, setSettings] = useState({
    // Payment settings
    paymentGateways: {
      razorpay: {
        enabled: true,
        keyId: 'rzp_test_1234567890',
        keySecret: '••••••••••••••••',
        webhookSecret: '••••••••••••••••'
      },
      stripe: {
        enabled: false,
        publishableKey: '',
        secretKey: ''
      },
      paypal: {
        enabled: false,
        clientId: '',
        clientSecret: ''
      }
    },
    upiSettings: {
      enabled: true,
      upiId: 'creator@paytm',
      qrCodeEnabled: true,
      directPayEnabled: true
    },
    // Checkout design
    checkoutDesign: {
      theme: 'modern',
      primaryColor: '#003366',
      accentColor: '#00B4C6',
      logoUrl: '',
      backgroundStyle: 'gradient',
      customCss: ''
    },
    // Order processing
    orderProcessing: {
      autoConfirmation: true,
      confirmationDelay: 5,
      emailNotifications: true,
      smsNotifications: true,
      whatsappNotifications: true,
      orderNumberFormat: 'CB-{YEAR}-{MONTH}-{INCREMENT}',
      taxCalculation: 'inclusive',
      gstRate: 18,
      platformFee: 2.5,
      minimumOrderValue: 99
    }
  });

  const handleSettingsUpdate = (section, updates) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...updates
      }
    }));
  };

  useEffect(() => {
    document.title = 'Checkout Configuration - CreatorBazaar Dashboard';
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">
          Checkout Configuration
        </h1>
        <p className="text-gray-400">
          Configure payment methods, checkout design, and order processing
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-muted p-1 rounded-lg w-fit">
        {[
          { id: 'payment', label: 'Payment Methods', icon: 'CreditCard' },
          { id: 'design', label: 'Checkout Design', icon: 'Palette' },
          { id: 'processing', label: 'Order Processing', icon: 'Settings' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-surface text-text-primary shadow-sm'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-surface rounded-xl border border-border p-6">
        {activeTab === 'payment' && (
          <PaymentSettings
            settings={settings.paymentGateways}
            upiSettings={settings.upiSettings}
            onUpdate={(updates) => handleSettingsUpdate('paymentGateways', updates)}
            onUpiUpdate={(updates) => handleSettingsUpdate('upiSettings', updates)}
          />
        )}

        {activeTab === 'design' && (
          <CheckoutDesign
            settings={settings.checkoutDesign}
            onUpdate={(updates) => handleSettingsUpdate('checkoutDesign', updates)}
          />
        )}

        {activeTab === 'processing' && (
          <OrderProcessing
            settings={settings.orderProcessing}
            onUpdate={(updates) => handleSettingsUpdate('orderProcessing', updates)}
          />
        )}
      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={() => {
            // Save settings logic here
            alert('Settings saved successfully!');
          }}
          className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Icon name="Save" size={20} />
          Save Configuration
        </button>
      </div>
    </div>
  );
};

export default CheckoutConfiguration;
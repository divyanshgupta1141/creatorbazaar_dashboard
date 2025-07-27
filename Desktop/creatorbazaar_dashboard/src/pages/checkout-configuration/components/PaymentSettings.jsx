import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PaymentSettings = () => {
  const [paymentMethods, setPaymentMethods] = useState({
    upi: { enabled: true, status: 'connected' },
    cards: { enabled: true, status: 'connected' },
    netbanking: { enabled: false, status: 'disconnected' },
    wallets: { enabled: true, status: 'connected' },
    cod: { enabled: false, status: 'not_available' }
  });

  const [gateways, setGateways] = useState({
    razorpay: { connected: true, status: 'active', fees: '2.5%' },
    payu: { connected: false, status: 'inactive', fees: '2.8%' },
    cashfree: { connected: false, status: 'inactive', fees: '2.3%' }
  });

  const togglePaymentMethod = (method) => {
    setPaymentMethods(prev => ({
      ...prev,
      [method]: {
        ...prev[method],
        enabled: !prev[method].enabled
      }
    }));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': case'active':
        return 'text-success';
      case 'disconnected': case'inactive':
        return 'text-error';
      default:
        return 'text-text-secondary';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'connected': case'active':
        return 'CheckCircle';
      case 'disconnected': case'inactive':
        return 'XCircle';
      default:
        return 'AlertCircle';
    }
  };

  return (
    <div className="space-y-6">
      {/* Payment Methods */}
      <div className="bg-surface rounded-xl p-6 card-shadow">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="CreditCard" size={20} className="mr-2 text-primary" />
          Payment Methods
        </h3>
        
        <div className="space-y-4">
          {/* UPI - Featured */}
          <div className="border border-accent/20 rounded-lg p-4 bg-accent/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Smartphone" size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">UPI Payments</h4>
                  <p className="text-sm text-text-secondary">GPay, PhonePe, Paytm & more</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Icon 
                    name={getStatusIcon(paymentMethods.upi.status)} 
                    size={16} 
                    className={getStatusColor(paymentMethods.upi.status)}
                  />
                  <span className={`text-sm ${getStatusColor(paymentMethods.upi.status)}`}>
                    Connected
                  </span>
                </div>
                <button
                  onClick={() => togglePaymentMethod('upi')}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    paymentMethods.upi.enabled ? 'bg-accent' : 'bg-border'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      paymentMethods.upi.enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Other Payment Methods */}
          {[
            { key: 'cards', icon: 'CreditCard', title: 'Credit/Debit Cards', desc: 'Visa, Mastercard, RuPay' },
            { key: 'netbanking', icon: 'Building2', title: 'Net Banking', desc: 'All major banks supported' },
            { key: 'wallets', icon: 'Wallet', title: 'Digital Wallets', desc: 'Paytm, MobiKwik, Freecharge' }
          ].map((method) => (
            <div key={method.key} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <Icon name={method.icon} size={20} className="text-text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">{method.title}</h4>
                  <p className="text-sm text-text-secondary">{method.desc}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Icon 
                    name={getStatusIcon(paymentMethods[method.key].status)} 
                    size={16} 
                    className={getStatusColor(paymentMethods[method.key].status)}
                  />
                  <span className={`text-sm ${getStatusColor(paymentMethods[method.key].status)}`}>
                    {paymentMethods[method.key].status === 'connected' ? 'Connected' : 'Setup Required'}
                  </span>
                </div>
                <button
                  onClick={() => togglePaymentMethod(method.key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    paymentMethods[method.key].enabled ? 'bg-accent' : 'bg-border'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      paymentMethods[method.key].enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Gateways */}
      <div className="bg-surface rounded-xl p-6 card-shadow">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Link" size={20} className="mr-2 text-primary" />
          Payment Gateways
        </h3>
        
        <div className="space-y-4">
          {Object.entries(gateways).map(([key, gateway]) => (
            <div key={key} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  gateway.connected ? 'bg-success/10' : 'bg-muted'
                }`}>
                  <Icon 
                    name={gateway.connected ? 'CheckCircle' : 'Plus'} 
                    size={20} 
                    className={gateway.connected ? 'text-success' : 'text-text-secondary'}
                  />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary capitalize">{key}</h4>
                  <p className="text-sm text-text-secondary">Transaction fees: {gateway.fees}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`text-sm ${getStatusColor(gateway.status)}`}>
                  {gateway.connected ? 'Connected' : 'Not Connected'}
                </span>
                <Button 
                  variant={gateway.connected ? 'outline' : 'primary'} 
                  size="sm"
                >
                  {gateway.connected ? 'Configure' : 'Connect'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction Settings */}
      <div className="bg-surface rounded-xl p-6 card-shadow">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Settings" size={20} className="mr-2 text-primary" />
          Transaction Settings
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-text-primary">Auto-capture payments</h4>
              <p className="text-sm text-text-secondary">Automatically capture authorized payments</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-accent">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-text-primary">Payment retry</h4>
              <p className="text-sm text-text-secondary">Allow customers to retry failed payments</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-accent">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-text-primary">GST collection</h4>
              <p className="text-sm text-text-secondary">Collect GST information from customers</p>
            </div>
            <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-border">
              <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSettings;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const OrderProcessing = () => {
  const [processingSettings, setProcessingSettings] = useState({
    autoConfirmation: true,
    whatsappNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    deliveryInstructions: true,
    orderTracking: true,
    refundPolicy: true,
    customMessage: "Thank you for your purchase! Your digital product will be delivered instantly."
  });

  const [emailTemplates, setEmailTemplates] = useState({
    orderConfirmation: {
      subject: "Order Confirmation - Your Digital Product is Ready!",
      enabled: true
    },
    deliveryNotification: {
      subject: "Your Digital Product Has Been Delivered",
      enabled: true
    },
    refundConfirmation: {
      subject: "Refund Processed Successfully",
      enabled: false
    }
  });

  const [whatsappSettings, setWhatsappSettings] = useState({
    orderConfirmation: true,
    deliveryNotification: true,
    supportUpdates: false,
    marketingMessages: false
  });

  const toggleSetting = (category, key) => {
    if (category === 'processing') {
      setProcessingSettings(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    } else if (category === 'email') {
      setEmailTemplates(prev => ({
        ...prev,
        [key]: {
          ...prev[key],
          enabled: !prev[key].enabled
        }
      }));
    } else if (category === 'whatsapp') {
      setWhatsappSettings(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    }
  };

  const deliveryMethods = [
    {
      id: 'instant',
      name: 'Instant Delivery',
      desc: 'Deliver immediately after payment',
      icon: 'Zap',
      enabled: true
    },
    {
      id: 'scheduled',
      name: 'Scheduled Delivery',
      desc: 'Deliver at specific time/date',
      icon: 'Clock',
      enabled: false
    },
    {
      id: 'manual',
      name: 'Manual Delivery',
      desc: 'Manually approve each delivery',
      icon: 'Hand',
      enabled: false
    }
  ];

  const notificationChannels = [
    {
      key: 'whatsappNotifications',
      name: 'WhatsApp',
      desc: 'Send updates via WhatsApp Business',
      icon: 'MessageCircle',
      color: 'text-success'
    },
    {
      key: 'emailNotifications',
      name: 'Email',
      desc: 'Send professional email notifications',
      icon: 'Mail',
      color: 'text-primary'
    },
    {
      key: 'smsNotifications',
      name: 'SMS',
      desc: 'Send text message updates',
      icon: 'Smartphone',
      color: 'text-warning'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Delivery Settings */}
      <div className="bg-surface rounded-xl p-6 card-shadow">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Truck" size={20} className="mr-2 text-primary" />
          Digital Product Delivery
        </h3>
        
        <div className="space-y-4">
          {deliveryMethods.map((method) => (
            <div
              key={method.id}
              className={`p-4 rounded-lg border cursor-pointer transition-micro ${
                method.enabled
                  ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    method.enabled ? 'bg-accent text-white' : 'bg-muted'
                  }`}>
                    <Icon name={method.icon} size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">{method.name}</h4>
                    <p className="text-sm text-text-secondary">{method.desc}</p>
                  </div>
                </div>
                {method.enabled && (
                  <Icon name="Check" size={20} className="text-accent" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-surface rounded-xl p-6 card-shadow">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Bell" size={20} className="mr-2 text-primary" />
          Customer Notifications
        </h3>
        
        <div className="space-y-4">
          {notificationChannels.map((channel) => (
            <div key={channel.key} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                  <Icon name={channel.icon} size={20} className={channel.color} />
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">{channel.name}</h4>
                  <p className="text-sm text-text-secondary">{channel.desc}</p>
                </div>
              </div>
              <button
                onClick={() => toggleSetting('processing', channel.key)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  processingSettings[channel.key] ? 'bg-accent' : 'bg-border'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    processingSettings[channel.key] ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp Settings */}
      <div className="bg-surface rounded-xl p-6 card-shadow">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="MessageCircle" size={20} className="mr-2 text-success" />
          WhatsApp Business Integration
        </h3>
        
        <div className="space-y-4">
          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span className="text-sm font-medium text-success">WhatsApp Business Connected</span>
            </div>
            <p className="text-sm text-text-secondary">
              Connected to: +91 98765 43210 | Business Account: CreatorBazaar
            </p>
          </div>
          
          <div className="space-y-3">
            {Object.entries(whatsappSettings).map(([key, enabled]) => (
              <div key={key} className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-text-primary capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {key === 'orderConfirmation' && 'Send order confirmation via WhatsApp'}
                    {key === 'deliveryNotification' && 'Notify when product is delivered'}
                    {key === 'supportUpdates' && 'Send customer support updates'}
                    {key === 'marketingMessages' && 'Send promotional messages (requires consent)'}
                  </p>
                </div>
                <button
                  onClick={() => toggleSetting('whatsapp', key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    enabled ? 'bg-success' : 'bg-border'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      enabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Email Templates */}
      <div className="bg-surface rounded-xl p-6 card-shadow">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Mail" size={20} className="mr-2 text-primary" />
          Email Templates
        </h3>
        
        <div className="space-y-4">
          {Object.entries(emailTemplates).map(([key, template]) => (
            <div key={key} className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-text-primary capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <p className="text-sm text-text-secondary">Subject: {template.subject}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Edit" size={14} className="mr-1" />
                    Edit
                  </Button>
                  <button
                    onClick={() => toggleSetting('email', key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      template.enabled ? 'bg-accent' : 'bg-border'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        template.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Processing Options */}
      <div className="bg-surface rounded-xl p-6 card-shadow">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="Settings" size={20} className="mr-2 text-primary" />
          Processing Options
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-text-primary">Auto-confirmation</h4>
              <p className="text-sm text-text-secondary">Automatically confirm orders after payment</p>
            </div>
            <button
              onClick={() => toggleSetting('processing', 'autoConfirmation')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                processingSettings.autoConfirmation ? 'bg-accent' : 'bg-border'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  processingSettings.autoConfirmation ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-text-primary">Order tracking</h4>
              <p className="text-sm text-text-secondary">Provide order tracking for customers</p>
            </div>
            <button
              onClick={() => toggleSetting('processing', 'orderTracking')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                processingSettings.orderTracking ? 'bg-accent' : 'bg-border'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  processingSettings.orderTracking ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium text-text-primary">Refund policy display</h4>
              <p className="text-sm text-text-secondary">Show refund policy on checkout</p>
            </div>
            <button
              onClick={() => toggleSetting('processing', 'refundPolicy')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                processingSettings.refundPolicy ? 'bg-accent' : 'bg-border'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  processingSettings.refundPolicy ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Message */}
      <div className="bg-surface rounded-xl p-6 card-shadow">
        <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
          <Icon name="MessageSquare" size={20} className="mr-2 text-primary" />
          Custom Thank You Message
        </h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Post-purchase message
            </label>
            <textarea
              value={processingSettings.customMessage}
              onChange={(e) => setProcessingSettings(prev => ({
                ...prev,
                customMessage: e.target.value
              }))}
              className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent resize-none"
              rows={4}
              placeholder="Enter your custom thank you message..."
            />
            <p className="text-sm text-text-secondary mt-2">
              This message will be shown to customers after successful purchase.
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="primary">
              <Icon name="Save" size={16} className="mr-2" />
              Save Message
            </Button>
            <Button variant="outline">
              <Icon name="Eye" size={16} className="mr-2" />
              Preview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcessing;
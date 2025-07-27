import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Image from '../../../components/AppImage';

const CheckoutDesign = () => {
  const [designSettings, setDesignSettings] = useState({
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop',
    primaryColor: '#003366',
    accentColor: '#00B4C6',
    headerText: 'Complete Your Purchase',
    footerText: 'Secure payment powered by Razorpay',
    showTrust: true,
    showProgress: true,
    layout: 'modern'
  });

  const [activePreview, setActivePreview] = useState('desktop');

  const colorPalette = [
    { name: 'Brand Blue', color: '#003366' },
    { name: 'Accent Cyan', color: '#00B4C6' },
    { name: 'Success Green', color: '#10B981' },
    { name: 'Warning Orange', color: '#F59E0B' },
    { name: 'Purple', color: '#8B5CF6' },
    { name: 'Pink', color: '#EC4899' }
  ];

  const layouts = [
    { id: 'modern', name: 'Modern', desc: 'Clean and minimal design' },
    { id: 'classic', name: 'Classic', desc: 'Traditional checkout form' },
    { id: 'compact', name: 'Compact', desc: 'Single page checkout' }
  ];

  const handleSettingChange = (key, value) => {
    setDesignSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const CheckoutPreview = () => (
    <div className={`${activePreview === 'mobile' ? 'max-w-sm' : 'max-w-md'} mx-auto bg-white rounded-xl shadow-lg overflow-hidden`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon name="ShoppingBag" size={16} color="white" />
            </div>
            <span className="font-medium">{designSettings.headerText}</span>
          </div>
          <Icon name="Lock" size={16} color="white" />
        </div>
        {designSettings.showProgress && (
          <div className="mt-3">
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Cart</span>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span>Payment</span>
              </div>
              <div className="flex-1 h-px bg-white/30"></div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                <span className="text-white/70">Complete</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Summary */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
            <Icon name="FileText" size={20} className="text-text-secondary" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-text-primary">Digital Marketing Course</h4>
            <p className="text-sm text-text-secondary">Complete guide to digital marketing</p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-text-primary">₹2,999</p>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="p-4">
        <h5 className="font-medium text-text-primary mb-3">Payment Method</h5>
        <div className="space-y-2">
          <div className="flex items-center p-3 border-2 border-accent rounded-lg bg-accent/5">
            <Icon name="Smartphone" size={20} className="text-accent mr-3" />
            <span className="font-medium text-text-primary">UPI</span>
            <Icon name="Check" size={16} className="text-accent ml-auto" />
          </div>
          <div className="flex items-center p-3 border border-border rounded-lg">
            <Icon name="CreditCard" size={20} className="text-text-secondary mr-3" />
            <span className="text-text-primary">Cards</span>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      {designSettings.showTrust && (
        <div className="p-4 bg-muted/50">
          <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Shield" size={14} />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Lock" size={14} />
              <span>Encrypted</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="CheckCircle" size={14} />
              <span>Verified</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="p-4 text-center">
        <p className="text-xs text-text-secondary">{designSettings.footerText}</p>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Design Controls */}
      <div className="space-y-6">
        {/* Logo & Branding */}
        <div className="bg-surface rounded-xl p-6 card-shadow">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="Image" size={20} className="mr-2 text-primary" />
            Logo & Branding
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Logo</label>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                  <Image 
                    src={designSettings.logo} 
                    alt="Logo preview"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button variant="outline" size="sm">
                  <Icon name="Upload" size={16} className="mr-2" />
                  Upload Logo
                </Button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Header Text</label>
              <Input
                type="text"
                value={designSettings.headerText}
                onChange={(e) => handleSettingChange('headerText', e.target.value)}
                placeholder="Enter header text"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Footer Text</label>
              <Input
                type="text"
                value={designSettings.footerText}
                onChange={(e) => handleSettingChange('footerText', e.target.value)}
                placeholder="Enter footer text"
              />
            </div>
          </div>
        </div>

        {/* Color Scheme */}
        <div className="bg-surface rounded-xl p-6 card-shadow">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="Palette" size={20} className="mr-2 text-primary" />
            Color Scheme
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Primary Color</label>
              <div className="grid grid-cols-3 gap-2">
                {colorPalette.map((color) => (
                  <button
                    key={color.color}
                    onClick={() => handleSettingChange('primaryColor', color.color)}
                    className={`flex items-center space-x-2 p-2 rounded-lg border transition-micro ${
                      designSettings.primaryColor === color.color 
                        ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                    }`}
                  >
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: color.color }}
                    ></div>
                    <span className="text-sm text-text-primary">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Layout Options */}
        <div className="bg-surface rounded-xl p-6 card-shadow">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="Layout" size={20} className="mr-2 text-primary" />
            Layout Style
          </h3>
          
          <div className="space-y-3">
            {layouts.map((layout) => (
              <div
                key={layout.id}
                onClick={() => handleSettingChange('layout', layout.id)}
                className={`p-4 rounded-lg border cursor-pointer transition-micro ${
                  designSettings.layout === layout.id
                    ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-text-primary">{layout.name}</h4>
                    <p className="text-sm text-text-secondary">{layout.desc}</p>
                  </div>
                  {designSettings.layout === layout.id && (
                    <Icon name="Check" size={20} className="text-accent" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Display Options */}
        <div className="bg-surface rounded-xl p-6 card-shadow">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="Eye" size={20} className="mr-2 text-primary" />
            Display Options
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-text-primary">Show progress bar</h4>
                <p className="text-sm text-text-secondary">Display checkout progress</p>
              </div>
              <button
                onClick={() => handleSettingChange('showProgress', !designSettings.showProgress)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  designSettings.showProgress ? 'bg-accent' : 'bg-border'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    designSettings.showProgress ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-text-primary">Trust indicators</h4>
                <p className="text-sm text-text-secondary">Show security badges</p>
              </div>
              <button
                onClick={() => handleSettingChange('showTrust', !designSettings.showTrust)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  designSettings.showTrust ? 'bg-accent' : 'bg-border'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    designSettings.showTrust ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Preview */}
      <div className="space-y-6">
        <div className="bg-surface rounded-xl p-6 card-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-text-primary flex items-center">
              <Icon name="Monitor" size={20} className="mr-2 text-primary" />
              Live Preview
            </h3>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActivePreview('desktop')}
                className={`p-2 rounded-lg transition-micro ${
                  activePreview === 'desktop' ?'bg-accent text-white' :'bg-muted text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name="Monitor" size={16} />
              </button>
              <button
                onClick={() => setActivePreview('mobile')}
                className={`p-2 rounded-lg transition-micro ${
                  activePreview === 'mobile' ?'bg-accent text-white' :'bg-muted text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name="Smartphone" size={16} />
              </button>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-6 min-h-96 flex items-center justify-center">
            <CheckoutPreview />
          </div>
        </div>

        {/* Test Checkout */}
        <div className="bg-surface rounded-xl p-6 card-shadow">
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="TestTube" size={20} className="mr-2 text-primary" />
            Test Your Checkout
          </h3>
          
          <div className="space-y-4">
            <p className="text-text-secondary">
              Test your checkout flow with different payment methods and see how customers will experience your store.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" className="flex-1">
                <Icon name="Play" size={16} className="mr-2" />
                Test Checkout Flow
              </Button>
              <Button variant="outline" className="flex-1">
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Preview Live
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDesign;
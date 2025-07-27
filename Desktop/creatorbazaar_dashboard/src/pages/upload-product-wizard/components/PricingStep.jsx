import React from 'react';
import { motion } from 'framer-motion';

import Icon from '../../../components/AppIcon';

const PricingStep = ({ formData, setFormData, errors, setErrors }) => {
  const suggestedPrices = [199, 299, 499];

  const handleSuggestedPriceClick = (price) => {
    setFormData(prev => ({ ...prev, price: price.toString() }));
    if (errors.price) {
      setErrors(prev => ({ ...prev, price: null }));
    }
  };

  const handleCustomPriceChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, ''); // Only allow digits
    setFormData(prev => ({ ...prev, price: value }));
    if (errors.price) {
      setErrors(prev => ({ ...prev, price: null }));
    }
  };

  const formatPrice = (price) => {
    if (!price) return '';
    const numPrice = parseInt(price);
    return new Intl.NumberFormat('en-IN').format(numPrice);
  };

  const getPriceRecommendation = (price) => {
    const numPrice = parseInt(price) || 0;
    if (numPrice < 99) return { text: 'Consider pricing higher for better perceived value', color: 'text-warning' };
    if (numPrice > 999) return { text: 'High price - ensure exceptional value delivery', color: 'text-info' };
    return { text: 'Good pricing range for digital products', color: 'text-success' };
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Suggested Pricing */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Suggested Pricing</h3>
          <p className="text-sm text-muted-foreground">
            Choose from our recommended prices or set your own
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {suggestedPrices.map((price, index) => {
            const isSelected = formData.price === price.toString();
            
            return (
              <motion.button
                key={price}
                type="button"
                onClick={() => handleSuggestedPriceClick(price)}
                className={`relative p-4 rounded-lg border-2 text-center transition-all duration-200 ${
                  isSelected
                    ? 'border-primary bg-gradient-to-br from-primary to-secondary text-white shadow-lg'
                    : 'border-border bg-background text-foreground hover:border-primary/30 hover:bg-muted/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Price */}
                <div className="space-y-2">
                  <div className="text-2xl font-bold">
                    ₹{formatPrice(price.toString())}
                  </div>
                  
                  {/* Price Label */}
                  <div className={`text-sm font-medium ${
                    isSelected ? 'text-white/90' : 'text-muted-foreground'
                  }`}>
                    {index === 0 ? 'Starter' : index === 1 ? 'Popular' : 'Premium'}
                  </div>

                  {/* Popular Badge */}
                  {index === 1 && (
                    <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium ${
                      isSelected ? 'bg-white text-primary' : 'bg-primary text-primary-foreground'
                    }`}>
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Selection Indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                  >
                    <Icon name="Check" size={14} color="var(--color-primary)" strokeWidth={3} />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Custom Pricing */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="h-px bg-border flex-1"></div>
          <span className="text-sm text-muted-foreground font-medium">OR</span>
          <div className="h-px bg-border flex-1"></div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Custom Price <span className="text-error">*</span>
          </label>
          
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground font-medium">
              ₹
            </div>
            <input
              type="text"
              placeholder="Enter custom amount"
              value={formData.price && !suggestedPrices.includes(parseInt(formData.price)) ? formatPrice(formData.price) : ''}
              onChange={handleCustomPriceChange}
              className={`w-full pl-8 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                errors.price 
                  ? 'border-error bg-error/5' :'border-border bg-input hover:border-primary/30'
              }`}
            />
          </div>

          {errors.price && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-2 text-error text-sm"
            >
              <Icon name="AlertCircle" size={16} />
              <span>{errors.price}</span>
            </motion.div>
          )}

          {/* Price Recommendation */}
          {formData.price && !errors.price && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center space-x-2 text-sm ${getPriceRecommendation(formData.price).color}`}
            >
              <Icon name="TrendingUp" size={16} />
              <span>{getPriceRecommendation(formData.price).text}</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Pricing Guidelines */}
      <div className="bg-muted/50 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full flex-shrink-0 mt-0.5">
            <Icon name="DollarSign" size={14} color="var(--color-primary)" strokeWidth={2} />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Pricing Guidelines</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Research competitor pricing for similar products</li>
              <li>• Consider the value and time investment of your content</li>
              <li>• Start with competitive pricing and adjust based on feedback</li>
              <li>• Higher prices can indicate premium quality</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Price Summary */}
      {formData.price && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-lg p-4 shadow-card"
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-medium text-foreground">Final Price</h4>
              <p className="text-xs text-muted-foreground">Amount customers will pay</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">
                ₹{formatPrice(formData.price)}
              </div>
              <div className="text-xs text-muted-foreground">
                + applicable taxes
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default PricingStep;
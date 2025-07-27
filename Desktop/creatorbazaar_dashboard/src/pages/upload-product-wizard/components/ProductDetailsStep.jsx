import React from 'react';
import { motion } from 'framer-motion';
import Input from '../../../components/ui/Input';
import CategorySelector from './CategorySelector';
import Icon from '../../../components/AppIcon';

const ProductDetailsStep = ({ formData, setFormData, errors, setErrors }) => {
  const handleTitleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 100) {
      setFormData(prev => ({ ...prev, title: value }));
      if (errors.title) {
        setErrors(prev => ({ ...prev, title: null }));
      }
    }
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setFormData(prev => ({ ...prev, description: value }));
      if (errors.description) {
        setErrors(prev => ({ ...prev, description: null }));
      }
    }
  };

  const handleCategoriesChange = (categories) => {
    setFormData(prev => ({ ...prev, categories }));
    if (errors.categories) {
      setErrors(prev => ({ ...prev, categories: null }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {/* Product Title */}
      <div className="space-y-2">
        <Input
          label="Product Title"
          type="text"
          placeholder="Enter a compelling product title"
          value={formData.title}
          onChange={handleTitleChange}
          error={errors.title}
          required
          className="w-full"
        />
        <div className="flex justify-between items-center text-xs">
          <span className={`${errors.title ? 'text-error' : 'text-muted-foreground'}`}>
            Make it descriptive and engaging
          </span>
          <span className={`font-medium ${
            formData.title.length > 90 ? 'text-warning' : 
            formData.title.length > 100 ? 'text-error' : 'text-muted-foreground'
          }`}>
            {formData.title.length}/100
          </span>
        </div>
      </div>

      {/* Product Description */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          Product Description <span className="text-error">*</span>
        </label>
        <div className="relative">
          <textarea
            placeholder="Describe your product in detail. What will customers get? What problems does it solve?"
            value={formData.description}
            onChange={handleDescriptionChange}
            rows={6}
            className={`w-full px-3 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
              errors.description 
                ? 'border-error bg-error/5' :'border-border bg-input hover:border-primary/30'
            }`}
          />
          {/* Character Counter Overlay */}
          <div className="absolute bottom-3 right-3">
            <span className={`text-xs font-medium px-2 py-1 rounded-md ${
              formData.description.length > 450 ? 'bg-warning/10 text-warning' : 
              formData.description.length > 500 ? 'bg-error/10 text-error': 'bg-muted text-muted-foreground'
            }`}>
              {formData.description.length}/500
            </span>
          </div>
        </div>
        
        {errors.description && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-2 text-error text-sm"
          >
            <Icon name="AlertCircle" size={16} />
            <span>{errors.description}</span>
          </motion.div>
        )}
        
        <p className="text-xs text-muted-foreground">
          Include key features, benefits, and what makes your product unique
        </p>
      </div>

      {/* Categories */}
      <CategorySelector
        selectedCategories={formData.categories}
        onChange={handleCategoriesChange}
        error={errors.categories}
      />

      {/* Product Details Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full flex-shrink-0 mt-0.5">
            <Icon name="Info" size={14} color="#3B82F6" strokeWidth={2} />
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Writing Tips</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Use clear, benefit-focused language</li>
              <li>• Mention target audience and use cases</li>
              <li>• Highlight unique selling points</li>
              <li>• Include technical requirements if applicable</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailsStep;
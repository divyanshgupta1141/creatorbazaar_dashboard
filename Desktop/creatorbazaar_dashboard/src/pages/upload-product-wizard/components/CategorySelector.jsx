import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CategorySelector = ({ selectedCategories, onChange, error }) => {
  const categories = [
    { id: 'education', label: 'Education', icon: 'GraduationCap' },
    { id: 'design', label: 'Design', icon: 'Palette' },
    { id: 'finance', label: 'Finance', icon: 'TrendingUp' },
    { id: 'fitness', label: 'Fitness', icon: 'Dumbbell' },
    { id: 'others', label: 'Others', icon: 'MoreHorizontal' }
  ];

  const handleCategoryToggle = (categoryId) => {
    const updatedCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    
    onChange(updatedCategories);
  };

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-foreground">
        Categories <span className="text-error">*</span>
      </label>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);
          
          return (
            <motion.button
              key={category.id}
              type="button"
              onClick={() => handleCategoryToggle(category.id)}
              className={`relative flex items-center space-x-3 p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                isSelected
                  ? 'border-primary bg-primary/5 text-primary'
                  : error
                  ? 'border-error/30 bg-error/5 text-foreground hover:border-error/50'
                  : 'border-border bg-background text-foreground hover:border-primary/30 hover:bg-muted/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Category Icon */}
              <div className={`flex items-center justify-center w-8 h-8 rounded-lg ${
                isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                <Icon name={category.icon} size={16} strokeWidth={2} />
              </div>

              {/* Category Label */}
              <span className="text-sm font-medium flex-1">{category.label}</span>

              {/* Selection Indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center"
                >
                  <Icon name="Check" size={12} color="white" strokeWidth={3} />
                </motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Selected Categories Display */}
      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {selectedCategories.map((categoryId) => {
            const category = categories.find(cat => cat.id === categoryId);
            return (
              <motion.div
                key={categoryId}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium"
              >
                <Icon name={category.icon} size={14} />
                <span>{category.label}</span>
                <button
                  type="button"
                  onClick={() => handleCategoryToggle(categoryId)}
                  className="hover:bg-primary/20 rounded-full p-0.5 transition-colors"
                >
                  <Icon name="X" size={12} strokeWidth={2} />
                </button>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-error text-sm"
        >
          <Icon name="AlertCircle" size={16} />
          <span>{error}</span>
        </motion.div>
      )}

      <p className="text-xs text-muted-foreground">
        Select one or more categories that best describe your product
      </p>
    </div>
  );
};

export default CategorySelector;
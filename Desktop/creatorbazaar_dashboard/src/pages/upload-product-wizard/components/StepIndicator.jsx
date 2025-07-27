import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StepIndicator = ({ currentStep, totalSteps = 3 }) => {
  const steps = [
    { id: 1, title: "Upload File", icon: "Upload" },
    { id: 2, title: "Product Details", icon: "FileText" },
    { id: 3, title: "Pricing", icon: "DollarSign" }
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between relative">
        {/* Progress Line */}
        <div className="absolute top-6 left-6 right-6 h-0.5 bg-border z-0">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ 
              width: currentStep === 1 ? "0%" : currentStep === 2 ? "50%" : "100%" 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </div>

        {/* Step Items */}
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center relative z-10">
            {/* Step Circle */}
            <motion.div
              className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                currentStep >= step.id
                  ? 'bg-primary border-primary text-primary-foreground'
                  : 'bg-background border-border text-muted-foreground'
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: currentStep === step.id ? 1.1 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {currentStep > step.id ? (
                <Icon name="Check" size={20} strokeWidth={2.5} />
              ) : (
                <Icon name={step.icon} size={20} strokeWidth={2} />
              )}
            </motion.div>

            {/* Step Label */}
            <div className="mt-3 text-center">
              <p className={`text-sm font-medium transition-colors ${
                currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {step.title}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Step {step.id}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;
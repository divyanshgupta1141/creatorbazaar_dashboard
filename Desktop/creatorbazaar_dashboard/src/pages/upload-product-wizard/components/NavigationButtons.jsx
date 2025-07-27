import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

const NavigationButtons = ({ 
  currentStep, 
  totalSteps, 
  onBack, 
  onNext, 
  onSubmit, 
  isLoading, 
  canProceed 
}) => {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between pt-6 border-t border-border"
    >
      {/* Back Button */}
      <div className="flex-1">
        {!isFirstStep && (
          <Button
            variant="outline"
            onClick={onBack}
            disabled={isLoading}
            iconName="ArrowLeft"
            iconPosition="left"
            className="w-auto"
          >
            Back
          </Button>
        )}
      </div>

      {/* Step Counter */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{currentStep}</span>
          <span>of</span>
          <span>{totalSteps}</span>
        </div>
      </div>

      {/* Next/Submit Button */}
      <div className="flex-1 flex justify-end">
        {isLastStep ? (
          <Button
            variant="default"
            onClick={onSubmit}
            loading={isLoading}
            disabled={!canProceed}
            iconName="Upload"
            iconPosition="right"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            Create Product
          </Button>
        ) : (
          <Button
            variant="default"
            onClick={onNext}
            disabled={!canProceed || isLoading}
            iconName="ArrowRight"
            iconPosition="right"
          >
            Next Step
          </Button>
        )}
      </div>
    </motion.div>
  );
};

export default NavigationButtons;
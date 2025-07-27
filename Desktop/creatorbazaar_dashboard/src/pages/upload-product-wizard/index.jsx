import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/ui/Header';
import StepIndicator from './components/StepIndicator';
import TipsCard from './components/TipsCard';
import UploadStep from './components/UploadStep';
import ProductDetailsStep from './components/ProductDetailsStep';
import PricingStep from './components/PricingStep';
import NavigationButtons from './components/NavigationButtons';
import SuccessToast from './components/SuccessToast';

const MultiStepProductUploadWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  
  const [formData, setFormData] = useState({
    file: null,
    title: '',
    description: '',
    categories: [],
    price: ''
  });

  const [errors, setErrors] = useState({
    file: null,
    title: null,
    description: null,
    categories: null,
    price: null
  });

  const totalSteps = 3;

  // Validation functions
  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.file) {
      newErrors.file = 'Please select a file to upload';
    }
    
    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Product title is required';
    } else if (formData.title.length < 10) {
      newErrors.title = 'Title must be at least 10 characters long';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Product description is required';
    } else if (formData.description.length < 50) {
      newErrors.description = 'Description must be at least 50 characters long';
    }
    
    if (formData.categories.length === 0) {
      newErrors.categories = 'Please select at least one category';
    }
    
    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    
    if (!formData.price || formData.price === '0') {
      newErrors.price = 'Please set a price for your product';
    } else if (parseInt(formData.price) < 1) {
      newErrors.price = 'Price must be at least ₹1';
    }
    
    setErrors(prev => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const canProceedToNext = () => {
    switch (currentStep) {
      case 1:
        return formData.file !== null;
      case 2:
        return formData.title.trim() && formData.description.trim() && formData.categories.length > 0;
      case 3:
        return formData.price && parseInt(formData.price) > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    let isValid = false;
    
    switch (currentStep) {
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      case 3:
        isValid = validateStep3();
        break;
      default:
        isValid = false;
    }
    
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep3()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success toast
      setShowSuccessToast(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          file: null,
          title: '',
          description: '',
          categories: [],
          price: ''
        });
        setCurrentStep(1);
        setErrors({
          file: null,
          title: null,
          description: null,
          categories: null,
          price: null
        });
      }, 2000);
      
    } catch (error) {
      console.error('Error creating product:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <UploadStep
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 2:
        return (
          <ProductDetailsStep
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 3:
        return (
          <PricingStep
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      default:
        return null;
    }
  };

  // Auto-advance from step 1 when file is selected
  useEffect(() => {
    if (currentStep === 1 && formData.file && !errors.file) {
      const timer = setTimeout(() => {
        setCurrentStep(2);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [formData.file, errors.file, currentStep]);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-lg shadow-card p-6 lg:p-8">
                {/* Page Header */}
                <div className="mb-8">
                  <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    Upload Your Digital Product
                  </h1>
                  <p className="text-muted-foreground">
                    Follow our simple 3-step process to list your digital product for sale
                  </p>
                </div>

                {/* Step Indicator */}
                <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

                {/* Step Content */}
                <div className="min-h-[400px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderCurrentStep()}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <NavigationButtons
                  currentStep={currentStep}
                  totalSteps={totalSteps}
                  onBack={handleBack}
                  onNext={handleNext}
                  onSubmit={handleSubmit}
                  isLoading={isLoading}
                  canProceed={canProceedToNext()}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <TipsCard />
                
                {/* Progress Summary */}
                <div className="bg-card border border-border rounded-lg p-4 shadow-card">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Progress Summary</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">File Upload</span>
                      <span className={`font-medium ${formData.file ? 'text-success' : 'text-muted-foreground'}`}>
                        {formData.file ? 'Complete' : 'Pending'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Product Details</span>
                      <span className={`font-medium ${
                        formData.title && formData.description && formData.categories.length > 0 
                          ? 'text-success' : 'text-muted-foreground'
                      }`}>
                        {formData.title && formData.description && formData.categories.length > 0 
                          ? 'Complete' : 'Pending'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Pricing</span>
                      <span className={`font-medium ${formData.price ? 'text-success' : 'text-muted-foreground'}`}>
                        {formData.price ? `₹${new Intl.NumberFormat('en-IN').format(parseInt(formData.price))}` : 'Pending'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Success Toast */}
      <SuccessToast
        isVisible={showSuccessToast}
        onClose={() => setShowSuccessToast(false)}
        productData={formData}
      />
    </div>
  );
};

export default MultiStepProductUploadWizard;
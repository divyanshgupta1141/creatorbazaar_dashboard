import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const WorkflowBuilder = ({ isOpen, onClose, onSave }) => {
  const [workflowName, setWorkflowName] = useState('');
  const [selectedTrigger, setSelectedTrigger] = useState(null);
  const [selectedActions, setSelectedActions] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const triggers = [
    {
      id: 'purchase',
      name: 'New Purchase',
      description: 'When customer completes a purchase',
      icon: 'ShoppingCart',
      color: 'from-success to-accent'
    },
    {
      id: 'signup',
      name: 'Customer Signup',
      description: 'When new customer registers',
      icon: 'UserPlus',
      color: 'from-primary to-accent'
    },
    {
      id: 'abandoned_cart',
      name: 'Abandoned Cart',
      description: 'When customer leaves items in cart',
      icon: 'ShoppingBag',
      color: 'from-warning to-error'
    },
    {
      id: 'product_view',
      name: 'Product View',
      description: 'When customer views a product',
      icon: 'Eye',
      color: 'from-accent to-primary'
    }
  ];

  const actions = [
    {
      id: 'send_email',
      name: 'Send Email',
      description: 'Send personalized email to customer',
      icon: 'Mail',
      color: 'from-primary to-accent'
    },
    {
      id: 'whatsapp_message',
      name: 'WhatsApp Message',
      description: 'Send WhatsApp message via Business API',
      icon: 'MessageCircle',
      color: 'from-success to-accent'
    },
    {
      id: 'discount_code',
      name: 'Generate Discount',
      description: 'Create and send discount code',
      icon: 'Percent',
      color: 'from-warning to-accent'
    },
    {
      id: 'add_tag',
      name: 'Add Customer Tag',
      description: 'Tag customer for segmentation',
      icon: 'Tag',
      color: 'from-accent to-primary'
    }
  ];

  const handleTriggerSelect = (trigger) => {
    setSelectedTrigger(trigger);
    setCurrentStep(2);
  };

  const handleActionToggle = (action) => {
    setSelectedActions(prev => {
      const exists = prev.find(a => a.id === action.id);
      if (exists) {
        return prev.filter(a => a.id !== action.id);
      } else {
        return [...prev, action];
      }
    });
  };

  const handleSave = () => {
    if (workflowName && selectedTrigger && selectedActions.length > 0) {
      onSave({
        name: workflowName,
        trigger: selectedTrigger,
        actions: selectedActions,
        status: 'draft'
      });
      onClose();
      // Reset form
      setWorkflowName('');
      setSelectedTrigger(null);
      setSelectedActions([]);
      setCurrentStep(1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-surface rounded-xl border border-border w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-text-primary">Create Workflow</h2>
            <p className="text-sm text-text-secondary">Automate your business processes</p>
          </div>
          <Button variant="ghost" size="sm" iconName="X" onClick={onClose} />
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b border-border">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step 
                    ? 'bg-primary text-white' :'bg-muted text-text-secondary'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-0.5 mx-2 ${
                    currentStep > step ? 'bg-primary' : 'bg-border'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className={currentStep >= 1 ? 'text-primary' : 'text-text-secondary'}>
              Choose Trigger
            </span>
            <span className={currentStep >= 2 ? 'text-primary' : 'text-text-secondary'}>
              Select Actions
            </span>
            <span className={currentStep >= 3 ? 'text-primary' : 'text-text-secondary'}>
              Configure & Save
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-96">
          {currentStep === 1 && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                What should trigger this workflow?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {triggers.map((trigger) => (
                  <div
                    key={trigger.id}
                    onClick={() => handleTriggerSelect(trigger)}
                    className={`p-4 rounded-lg border cursor-pointer transition-smooth hover:scale-105 ${
                      selectedTrigger?.id === trigger.id
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${trigger.color} rounded-lg flex items-center justify-center`}>
                        <Icon name={trigger.icon} size={20} color="white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">{trigger.name}</h4>
                        <p className="text-sm text-text-secondary">{trigger.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                What actions should happen?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {actions.map((action) => (
                  <div
                    key={action.id}
                    onClick={() => handleActionToggle(action)}
                    className={`p-4 rounded-lg border cursor-pointer transition-smooth hover:scale-105 ${
                      selectedActions.find(a => a.id === action.id)
                        ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${action.color} rounded-lg flex items-center justify-center`}>
                          <Icon name={action.icon} size={20} color="white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-text-primary">{action.name}</h4>
                          <p className="text-sm text-text-secondary">{action.description}</p>
                        </div>
                      </div>
                      {selectedActions.find(a => a.id === action.id) && (
                        <Icon name="Check" size={20} className="text-primary" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  Back
                </Button>
                <Button 
                  variant="primary" 
                  onClick={() => setCurrentStep(3)}
                  disabled={selectedActions.length === 0}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Configure your workflow
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Workflow Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter workflow name"
                    value={workflowName}
                    onChange={(e) => setWorkflowName(e.target.value)}
                  />
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">Workflow Summary</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Zap" size={16} className="text-primary" />
                      <span className="text-sm text-text-secondary">
                        Trigger: {selectedTrigger?.name}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="ArrowRight" size={16} className="text-accent" />
                      <span className="text-sm text-text-secondary">
                        Actions: {selectedActions.map(a => a.name).join(', ')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  Back
                </Button>
                <Button 
                  variant="primary" 
                  onClick={handleSave}
                  disabled={!workflowName}
                >
                  Create Workflow
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkflowBuilder;
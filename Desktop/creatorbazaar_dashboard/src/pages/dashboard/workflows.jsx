import React, { useState, useEffect } from 'react';
import WorkflowCard from '../workflow-automation/components/WorkflowCard';
import WorkflowBuilder from '../workflow-automation/components/WorkflowBuilder';
import WorkflowTemplates from '../workflow-automation/components/WorkflowTemplates';
import WorkflowAnalytics from '../workflow-automation/components/WorkflowAnalytics';
import Icon from '../../components/AppIcon';


const WorkflowAutomation = () => {
  const [activeTab, setActiveTab] = useState('workflows');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);

  // Mock data for workflows
  const [workflows, setWorkflows] = useState([
    {
      id: '1',
      name: 'Order Confirmation WhatsApp',
      description: 'Automatically send WhatsApp messages when customers place orders',
      status: 'active',
      trigger: 'order_placed',
      actions: ['send_whatsapp', 'update_customer'],
      executions: 245,
      successRate: 98.5,
      createdAt: '2024-01-15',
      updatedAt: '2024-01-20',
      category: 'communication',
      template: 'order_confirmation'
    },
    {
      id: '2',
      name: 'Payment Reminder Series',
      description: 'Send automated payment reminders for pending orders',
      status: 'active',
      trigger: 'payment_pending',
      actions: ['send_email', 'send_sms', 'create_task'],
      executions: 189,
      successRate: 87.2,
      createdAt: '2024-01-10',
      updatedAt: '2024-01-18',
      category: 'payment',
      template: 'payment_reminder'
    },
    {
      id: '3',
      name: 'New Customer Welcome',
      description: 'Welcome new customers with personalized onboarding sequence',
      status: 'draft',
      trigger: 'customer_created',
      actions: ['send_welcome_email', 'add_to_newsletter', 'send_discount'],
      executions: 67,
      successRate: 95.8,
      createdAt: '2024-01-08',
      updatedAt: '2024-01-16',
      category: 'onboarding',
      template: 'customer_welcome'
    },
    {
      id: '4',
      name: 'Product Review Request',
      description: 'Request reviews from customers after successful delivery',
      status: 'active',
      trigger: 'order_delivered',
      actions: ['send_review_request', 'create_reminder'],
      executions: 123,
      successRate: 76.4,
      createdAt: '2024-01-05',
      updatedAt: '2024-01-14',
      category: 'engagement',
      template: 'review_request'
    },
    {
      id: '5',
      name: 'Abandoned Cart Recovery',
      description: 'Recover abandoned carts with targeted follow-up messages',
      status: 'paused',
      trigger: 'cart_abandoned',
      actions: ['send_reminder', 'offer_discount'],
      executions: 89,
      successRate: 43.8,
      createdAt: '2024-01-03',
      updatedAt: '2024-01-12',
      category: 'recovery',
      template: 'cart_recovery'
    }
  ]);

  // Filter workflows based on search and filters
  const filteredWorkflows = workflows.filter(workflow => {
    const matchesSearch = workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workflow.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workflow.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || workflow.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const handleWorkflowEdit = (workflow) => {
    setSelectedWorkflow(workflow);
    setIsBuilderOpen(true);
  };

  const handleWorkflowSave = (updatedWorkflow) => {
    if (updatedWorkflow.id) {
      setWorkflows(prevWorkflows =>
        prevWorkflows.map(w =>
          w.id === updatedWorkflow.id ? { ...w, ...updatedWorkflow, updatedAt: new Date().toISOString().split('T')[0] } : w
        )
      );
    } else {
      const newWorkflow = {
        ...updatedWorkflow,
        id: Date.now().toString(),
        executions: 0,
        successRate: 0,
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0]
      };
      setWorkflows(prevWorkflows => [newWorkflow, ...prevWorkflows]);
    }
    setIsBuilderOpen(false);
    setSelectedWorkflow(null);
  };

  const handleWorkflowDelete = (workflowId) => {
    if (window.confirm('Are you sure you want to delete this workflow?')) {
      setWorkflows(prevWorkflows => prevWorkflows.filter(w => w.id !== workflowId));
    }
  };

  const handleWorkflowToggleStatus = (workflowId) => {
    setWorkflows(prevWorkflows =>
      prevWorkflows.map(w =>
        w.id === workflowId
          ? { 
              ...w, 
              status: w.status === 'active' ? 'paused' : 'active',
              updatedAt: new Date().toISOString().split('T')[0] 
            }
          : w
      )
    );
  };

  const handleWorkflowDuplicate = (workflow) => {
    const newWorkflow = {
      ...workflow,
      id: Date.now().toString(),
      name: `${workflow.name} (Copy)`,
      status: 'draft',
      executions: 0,
      successRate: 0,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setWorkflows(prevWorkflows => [newWorkflow, ...prevWorkflows]);
  };

  const handleCreateFromTemplate = (template) => {
    setSelectedWorkflow(template);
    setIsBuilderOpen(true);
  };

  useEffect(() => {
    document.title = 'Workflow Automation - CreatorBazaar Dashboard';
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* My Products Placeholder */}
      <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">My Products</h1>
      <p className="text-gray-400">This section will show your products soon.</p>
    </div>
  );
};

export default WorkflowAutomation;
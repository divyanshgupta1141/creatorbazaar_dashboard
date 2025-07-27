import React, { useState } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import WorkflowCard from './components/WorkflowCard';
import WorkflowBuilder from './components/WorkflowBuilder';
import WorkflowTemplates from './components/WorkflowTemplates';
import WorkflowAnalytics from './components/WorkflowAnalytics';

const WorkflowAutomation = () => {
  const [activeTab, setActiveTab] = useState('workflows');
  const [searchQuery, setSearchQuery] = useState('');
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [selectedAnalytics, setSelectedAnalytics] = useState(null);
  const [workflows, setWorkflows] = useState([
    {
      id: 1,
      name: 'Welcome New Customers',
      description: 'Send welcome message and first purchase discount',
      trigger: 'signup',
      status: 'active',
      executions: 342,
      successRate: 94,
      revenue: '12,500',
      createdAt: '2 weeks ago'
    },
    {
      id: 2,
      name: 'Cart Abandonment Recovery',
      description: 'Remind customers about items left in cart',
      trigger: 'abandoned_cart',
      status: 'active',
      executions: 156,
      successRate: 87,
      revenue: '8,200',
      createdAt: '1 month ago'
    },
    {
      id: 3,
      name: 'Festival Sale Campaign',
      description: 'Automated Diwali sale notifications',
      trigger: 'purchase',
      status: 'paused',
      executions: 89,
      successRate: 92,
      revenue: '5,600',
      createdAt: '3 days ago'
    },
    {
      id: 4,
      name: 'Product Launch Sequence',
      description: 'Multi-step campaign for new product announcements',
      trigger: 'product_view',
      status: 'draft',
      executions: 0,
      successRate: 0,
      revenue: '0',
      createdAt: '1 day ago'
    }
  ]);

  const filteredWorkflows = workflows.filter(workflow =>
    workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    workflow.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleWorkflow = (workflowId) => {
    setWorkflows(prev => prev.map(workflow => 
      workflow.id === workflowId 
        ? { 
            ...workflow, 
            status: workflow.status === 'active' ? 'paused' : 'active' 
          }
        : workflow
    ));
  };

  const handleEditWorkflow = (workflowId) => {
    console.log('Edit workflow:', workflowId);
    // Implementation for editing workflow
  };

  const handleShowAnalytics = (workflowId) => {
    setSelectedAnalytics(workflowId);
  };

  const handleSaveWorkflow = (workflowData) => {
    const newWorkflow = {
      id: workflows.length + 1,
      name: workflowData.name,
      description: `${workflowData.trigger.name} → ${workflowData.actions.map(a => a.name).join(', ')}`,
      trigger: workflowData.trigger.id,
      status: 'draft',
      executions: 0,
      successRate: 0,
      revenue: '0',
      createdAt: 'Just now'
    };
    setWorkflows(prev => [newWorkflow, ...prev]);
  };

  const handleUseTemplate = (template) => {
    const newWorkflow = {
      id: workflows.length + 1,
      name: template.name,
      description: template.description,
      trigger: template.id,
      status: 'draft',
      executions: 0,
      successRate: 0,
      revenue: '0',
      createdAt: 'Just now'
    };
    setWorkflows(prev => [newWorkflow, ...prev]);
    setActiveTab('workflows');
  };

  const stats = [
    {
      label: 'Active Workflows',
      value: workflows.filter(w => w.status === 'active').length,
      icon: 'Zap',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      label: 'Total Executions',
      value: workflows.reduce((sum, w) => sum + w.executions, 0).toLocaleString(),
      icon: 'BarChart3',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      label: 'Success Rate',
      value: `${Math.round(workflows.reduce((sum, w) => sum + w.successRate, 0) / workflows.length)}%`,
      icon: 'CheckCircle',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      label: 'Revenue Generated',
      value: `₹${workflows.reduce((sum, w) => sum + parseInt(w.revenue.replace(',', '')), 0).toLocaleString()}`,
      icon: 'TrendingUp',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface border-b border-border sticky top-0 z-20">
        <div className="px-4 lg:px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-text-primary">
                Workflow Automation
              </h1>
              <p className="text-text-secondary mt-1">
                Automate your business processes and boost customer engagement
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                iconName="BarChart3"
                onClick={() => setSelectedAnalytics('overview')}
              >
                View Analytics
              </Button>
              <Button
                variant="primary"
                iconName="Plus"
                onClick={() => setIsBuilderOpen(true)}
              >
                Create Workflow
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-4 lg:px-6 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-surface rounded-xl border border-border p-4 hover:card-shadow transition-smooth">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                  <Icon name={stat.icon} size={20} className={stat.color} />
                </div>
                <div>
                  <p className="text-lg lg:text-xl font-bold text-text-primary">{stat.value}</p>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-1 bg-muted rounded-lg p-1 mb-6 overflow-x-auto">
          {[
            { id: 'workflows', label: 'My Workflows', icon: 'Workflow' },
            { id: 'templates', label: 'Templates', icon: 'Layout' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-micro whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-surface text-text-primary shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'workflows' && (
          <div>
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 mb-6">
              <div className="relative flex-1 max-w-md">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
                <Input
                  type="text"
                  placeholder="Search workflows..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" iconName="Filter">
                  Filter
                </Button>
                <Button variant="outline" size="sm" iconName="SortDesc">
                  Sort
                </Button>
              </div>
            </div>

            {/* Workflows Grid */}
            {filteredWorkflows.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredWorkflows.map((workflow) => (
                  <WorkflowCard
                    key={workflow.id}
                    workflow={workflow}
                    onToggle={handleToggleWorkflow}
                    onEdit={handleEditWorkflow}
                    onAnalytics={handleShowAnalytics}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={24} className="text-text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  No workflows found
                </h3>
                <p className="text-text-secondary mb-4">
                  Try adjusting your search or create a new workflow
                </p>
                <Button
                  variant="primary"
                  iconName="Plus"
                  onClick={() => setIsBuilderOpen(true)}
                >
                  Create Your First Workflow
                </Button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'templates' && (
          <WorkflowTemplates onUseTemplate={handleUseTemplate} />
        )}
      </div>

      {/* Workflow Builder Modal */}
      <WorkflowBuilder
        isOpen={isBuilderOpen}
        onClose={() => setIsBuilderOpen(false)}
        onSave={handleSaveWorkflow}
      />

      {/* Analytics Modal */}
      {selectedAnalytics && (
        <WorkflowAnalytics
          workflowId={selectedAnalytics}
          onClose={() => setSelectedAnalytics(null)}
        />
      )}
    </div>
  );
};

export default WorkflowAutomation;
import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const WorkflowCard = ({ workflow, onToggle, onEdit, onAnalytics }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'text-success bg-success/10 border-success/20';
      case 'paused':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'draft':
        return 'text-text-secondary bg-muted border-border';
      default:
        return 'text-text-secondary bg-muted border-border';
    }
  };

  const getTriggerIcon = (trigger) => {
    switch (trigger) {
      case 'purchase':
        return 'ShoppingCart';
      case 'signup':
        return 'UserPlus';
      case 'abandoned_cart':
        return 'ShoppingBag';
      case 'product_view':
        return 'Eye';
      default:
        return 'Zap';
    }
  };

  return (
    <div className="bg-surface rounded-xl border border-border p-6 hover:card-shadow-elevated transition-smooth hover:scale-[1.02] cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
            <Icon name={getTriggerIcon(workflow.trigger)} size={20} color="white" />
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">{workflow.name}</h3>
            <p className="text-sm text-text-secondary">{workflow.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(workflow.status)}`}>
            {workflow.status.charAt(0).toUpperCase() + workflow.status.slice(1)}
          </span>
          <button
            onClick={() => onToggle(workflow.id)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              workflow.status === 'active' ? 'bg-success' : 'bg-border'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                workflow.status === 'active' ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-text-primary">{workflow.executions}</p>
          <p className="text-xs text-text-secondary">Executions</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-success">{workflow.successRate}%</p>
          <p className="text-xs text-text-secondary">Success Rate</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-accent">₹{workflow.revenue}</p>
          <p className="text-xs text-text-secondary">Revenue</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Calendar" size={14} className="text-text-secondary" />
          <span className="text-sm text-text-secondary">
            Created {workflow.createdAt}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            iconName="BarChart3"
            onClick={() => onAnalytics(workflow.id)}
          >
            Analytics
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Edit"
            onClick={() => onEdit(workflow.id)}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkflowCard;
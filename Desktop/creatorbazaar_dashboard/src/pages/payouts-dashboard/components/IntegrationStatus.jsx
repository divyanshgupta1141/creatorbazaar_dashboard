import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IntegrationStatus = ({ integrations }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected':
        return 'text-success bg-success/10 border-success/20';
      case 'disconnected':
        return 'text-error bg-error/10 border-error/20';
      case 'pending':
        return 'text-warning bg-warning/10 border-warning/20';
      default:
        return 'text-text-secondary bg-muted border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'connected':
        return 'CheckCircle';
      case 'disconnected':
        return 'XCircle';
      case 'pending':
        return 'Clock';
      default:
        return 'AlertCircle';
    }
  };

  const handleRefreshStatus = async () => {
    setIsRefreshing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsRefreshing(false);
      alert('Integration status refreshed successfully!');
    }, 2000);
  };

  const handleConnect = (integrationName) => {
    alert(`Redirecting to ${integrationName} connection setup...`);
  };

  return (
    <div className="bg-surface rounded-xl card-shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="Link" size={24} className="text-primary" />
          <h3 className="text-lg font-semibold text-text-primary">Payment Integrations</h3>
        </div>
        
        <Button
          variant="outline"
          onClick={handleRefreshStatus}
          loading={isRefreshing}
          iconName="RefreshCw"
          iconPosition="left"
        >
          Refresh
        </Button>
      </div>

      <div className="space-y-4">
        {integrations.map((integration) => (
          <div key={integration.id} className="border border-border rounded-lg p-4 hover:bg-muted/30 transition-micro">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Integration Icon */}
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <Icon name={integration.icon} size={24} className="text-text-primary" />
                </div>
                
                {/* Integration Info */}
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">{integration.name}</h4>
                  <p className="text-xs text-text-secondary">{integration.description}</p>
                  
                  {/* Status Badge */}
                  <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border mt-2 ${getStatusColor(integration.status)}`}>
                    <Icon name={getStatusIcon(integration.status)} size={12} />
                    <span>{integration.status.charAt(0).toUpperCase() + integration.status.slice(1)}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col items-end space-y-2">
                {integration.status === 'connected' ? (
                  <div className="text-right">
                    <p className="text-xs text-text-secondary">Last sync</p>
                    <p className="text-xs font-medium text-text-primary">{integration.lastSync}</p>
                  </div>
                ) : (
                  <Button
                    variant={integration.status === 'disconnected' ? 'primary' : 'outline'}
                    onClick={() => handleConnect(integration.name)}
                    iconName={integration.status === 'disconnected' ? 'Plus' : 'Settings'}
                  >
                    {integration.status === 'disconnected' ? 'Connect' : 'Setup'}
                  </Button>
                )}
              </div>
            </div>

            {/* Additional Info for Connected Integrations */}
            {integration.status === 'connected' && integration.details && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-xs text-text-secondary">Success Rate</p>
                    <p className="text-sm font-semibold text-success">{integration.details.successRate}%</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Avg Processing</p>
                    <p className="text-sm font-semibold text-text-primary">{integration.details.avgProcessing}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Total Volume</p>
                    <p className="text-sm font-semibold text-text-primary">₹{integration.details.totalVolume.toLocaleString('en-IN')}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">Fees</p>
                    <p className="text-sm font-semibold text-text-primary">{integration.details.fees}%</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message for Disconnected */}
            {integration.status === 'disconnected' && integration.error && (
              <div className="mt-4 p-3 bg-error/5 border border-error/20 rounded-lg">
                <div className="flex items-start space-x-2">
                  <Icon name="AlertTriangle" size={16} className="text-error mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-error">Connection Issue</p>
                    <p className="text-xs text-text-secondary">{integration.error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add New Integration */}
      <div className="mt-6 p-4 border-2 border-dashed border-border rounded-lg text-center">
        <Icon name="Plus" size={24} className="text-text-secondary mx-auto mb-2" />
        <p className="text-sm text-text-secondary mb-3">Add more payment methods to increase conversion</p>
        <Button variant="outline" iconName="Plus" iconPosition="left">
          Add Integration
        </Button>
      </div>

      {/* Integration Health Summary */}
      <div className="mt-6 p-4 bg-muted/20 rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-text-primary">Integration Health</h4>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-xs text-text-secondary">All systems operational</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-xs text-text-secondary">Connected</p>
            <p className="text-lg font-bold text-success">
              {integrations.filter(i => i.status === 'connected').length}
            </p>
          </div>
          <div>
            <p className="text-xs text-text-secondary">Pending</p>
            <p className="text-lg font-bold text-warning">
              {integrations.filter(i => i.status === 'pending').length}
            </p>
          </div>
          <div>
            <p className="text-xs text-text-secondary">Issues</p>
            <p className="text-lg font-bold text-error">
              {integrations.filter(i => i.status === 'disconnected').length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationStatus;
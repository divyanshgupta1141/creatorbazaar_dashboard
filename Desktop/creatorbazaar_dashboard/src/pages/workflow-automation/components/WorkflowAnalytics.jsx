import React from 'react';
import Icon from '../../../components/AppIcon';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const WorkflowAnalytics = ({ workflowId, onClose }) => {
  const performanceData = [
    { name: 'Mon', executions: 45, success: 42, revenue: 2800 },
    { name: 'Tue', executions: 52, success: 48, revenue: 3200 },
    { name: 'Wed', executions: 38, success: 35, revenue: 2100 },
    { name: 'Thu', executions: 61, success: 58, revenue: 3800 },
    { name: 'Fri', executions: 73, success: 69, revenue: 4500 },
    { name: 'Sat', executions: 89, success: 84, revenue: 5600 },
    { name: 'Sun', executions: 67, success: 63, revenue: 4200 }
  ];

  const actionBreakdown = [
    { name: 'Email Sent', value: 342, color: '#003366' },
    { name: 'WhatsApp Sent', value: 298, color: '#00B4C6' },
    { name: 'Discounts Generated', value: 156, color: '#10B981' },
    { name: 'Tags Added', value: 89, color: '#F59E0B' }
  ];

  const conversionFunnel = [
    { stage: 'Triggered', count: 1250, percentage: 100 },
    { stage: 'Email Opened', count: 875, percentage: 70 },
    { stage: 'Link Clicked', count: 438, percentage: 35 },
    { stage: 'Purchase Made', count: 156, percentage: 12.5 }
  ];

  const stats = [
    {
      label: 'Total Executions',
      value: '1,247',
      change: '+12.5%',
      trend: 'up',
      icon: 'Zap',
      color: 'text-primary'
    },
    {
      label: 'Success Rate',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: 'CheckCircle',
      color: 'text-success'
    },
    {
      label: 'Revenue Generated',
      value: '₹26,200',
      change: '+18.7%',
      trend: 'up',
      icon: 'TrendingUp',
      color: 'text-accent'
    },
    {
      label: 'Avg. Response Time',
      value: '2.3s',
      change: '-0.5s',
      trend: 'down',
      icon: 'Clock',
      color: 'text-warning'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-surface rounded-xl border border-border w-full max-w-6xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-text-primary">Workflow Analytics</h2>
            <p className="text-sm text-text-secondary">Performance insights for the last 7 days</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-micro"
          >
            <Icon name="X" size={20} className="text-text-secondary" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-muted rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <Icon name={stat.icon} size={20} className={stat.color} />
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-success' : 'text-error'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-text-primary">{stat.value}</p>
                <p className="text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Performance Chart */}
            <div className="bg-muted rounded-lg p-4">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Daily Performance
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="name" stroke="#64748B" />
                    <YAxis stroke="#64748B" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="executions" fill="#003366" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="success" fill="#00B4C6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Revenue Trend */}
            <div className="bg-muted rounded-lg p-4">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Revenue Trend
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="name" stroke="#64748B" />
                    <YAxis stroke="#64748B" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E2E8F0',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#10B981" 
                      strokeWidth={3}
                      dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Action Breakdown and Conversion Funnel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Action Breakdown */}
            <div className="bg-muted rounded-lg p-4">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Action Breakdown
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={actionBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {actionBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {actionBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-text-secondary">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversion Funnel */}
            <div className="bg-muted rounded-lg p-4">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Conversion Funnel
              </h3>
              <div className="space-y-3">
                {conversionFunnel.map((stage, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-text-primary">
                        {stage.stage}
                      </span>
                      <span className="text-sm text-text-secondary">
                        {stage.count} ({stage.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${stage.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowAnalytics;
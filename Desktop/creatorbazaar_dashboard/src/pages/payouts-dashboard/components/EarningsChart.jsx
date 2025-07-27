import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EarningsChart = ({ chartData }) => {
  const [chartType, setChartType] = useState('line');
  const [timeRange, setTimeRange] = useState('7d');

  const timeRanges = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '90d', label: '90 Days' },
    { value: '1y', label: '1 Year' }
  ];

  const formatCurrency = (value) => {
    return `₹${value.toLocaleString('en-IN')}`;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric' });
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface border border-border rounded-lg p-3 shadow-lg">
          <p className="text-sm text-text-secondary mb-1">{formatDate(label)}</p>
          <p className="text-sm font-semibold text-text-primary">
            Earnings: {formatCurrency(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-surface rounded-xl card-shadow p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <Icon name="TrendingUp" size={24} className="text-primary" />
          <h3 className="text-lg font-semibold text-text-primary">Earnings Trend</h3>
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Time Range Selector */}
          <div className="flex space-x-1 bg-muted rounded-lg p-1">
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => setTimeRange(range.value)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-micro ${
                  timeRange === range.value
                    ? 'bg-surface text-primary shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>

          {/* Chart Type Toggle */}
          <div className="flex space-x-1">
            <Button
              variant={chartType === 'line' ? 'primary' : 'outline'}
              onClick={() => setChartType('line')}
              iconName="TrendingUp"
            />
            <Button
              variant={chartType === 'bar' ? 'primary' : 'outline'}
              onClick={() => setChartType('bar')}
              iconName="BarChart3"
            />
          </div>
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'line' ? (
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="date" 
                tickFormatter={formatDate}
                stroke="var(--color-text-secondary)"
                fontSize={12}
              />
              <YAxis 
                tickFormatter={formatCurrency}
                stroke="var(--color-text-secondary)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="earnings" 
                stroke="var(--color-primary)" 
                strokeWidth={3}
                dot={{ fill: 'var(--color-primary)', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: 'var(--color-accent)', strokeWidth: 2 }}
              />
            </LineChart>
          ) : (
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="date" 
                tickFormatter={formatDate}
                stroke="var(--color-text-secondary)"
                fontSize={12}
              />
              <YAxis 
                tickFormatter={formatCurrency}
                stroke="var(--color-text-secondary)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="earnings" 
                fill="var(--color-primary)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-border">
        <div className="text-center">
          <p className="text-sm text-text-secondary">Avg Daily</p>
          <p className="text-lg font-semibold text-text-primary">
            ₹{(chartData.reduce((sum, item) => sum + item.earnings, 0) / chartData.length).toLocaleString('en-IN')}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-text-secondary">Highest Day</p>
          <p className="text-lg font-semibold text-success">
            ₹{Math.max(...chartData.map(item => item.earnings)).toLocaleString('en-IN')}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-text-secondary">Total Period</p>
          <p className="text-lg font-semibold text-text-primary">
            ₹{chartData.reduce((sum, item) => sum + item.earnings, 0).toLocaleString('en-IN')}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-text-secondary">Growth</p>
          <p className="text-lg font-semibold text-accent">+12.5%</p>
        </div>
      </div>
    </div>
  );
};

export default EarningsChart;
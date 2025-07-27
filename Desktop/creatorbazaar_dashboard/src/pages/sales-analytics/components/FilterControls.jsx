import React from 'react';
import Button from '../../../components/ui/Button';


const FilterControls = ({ 
  timeRange, 
  setTimeRange, 
  productCategory, 
  setProductCategory, 
  paymentMethod, 
  setPaymentMethod,
  onExportPDF,
  onExportCSV 
}) => {
  const timeRanges = [
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '3m', label: '3 Months' }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'ebooks', label: 'E-books' },
    { value: 'courses', label: 'Online Courses' },
    { value: 'templates', label: 'Templates' },
    { value: 'software', label: 'Software' }
  ];

  const paymentMethods = [
    { value: 'all', label: 'All Methods' },
    { value: 'upi', label: 'UPI' },
    { value: 'cards', label: 'Cards' },
    { value: 'wallets', label: 'Wallets' }
  ];

  return (
    <div className="bg-surface rounded-xl border border-border p-6 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Time Range */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-text-primary">Time Range</label>
            <div className="flex space-x-2">
              {timeRanges.map((range) => (
                <button
                  key={range.value}
                  onClick={() => setTimeRange(range.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-micro ${
                    timeRange === range.value
                      ? 'bg-gradient-to-r from-primary to-accent text-white' :'bg-muted text-text-secondary hover:text-text-primary hover:bg-muted/80'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Category */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-text-primary">Category</label>
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              className="px-3 py-2 rounded-lg border border-border bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* Payment Method */}
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-text-primary">Payment</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="px-3 py-2 rounded-lg border border-border bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {paymentMethods.map((method) => (
                <option key={method.value} value={method.value}>
                  {method.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Export Controls */}
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            iconName="FileText"
            iconPosition="left"
            onClick={onExportPDF}
            className="text-sm"
          >
            Export PDF
          </Button>
          <Button
            variant="outline"
            iconName="Download"
            iconPosition="left"
            onClick={onExportCSV}
            className="text-sm"
          >
            Export CSV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TaxInformation = ({ taxData }) => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [isDownloading, setIsDownloading] = useState(false);

  const years = ['2024', '2023', '2022'];

  const handleDownloadStatement = async (type) => {
    setIsDownloading(true);
    
    // Simulate download
    setTimeout(() => {
      alert(`${type} statement for ${selectedYear} has been downloaded successfully!`);
      setIsDownloading(false);
    }, 2000);
  };

  const currentYearData = taxData[selectedYear] || {};

  return (
    <div className="bg-surface rounded-xl card-shadow p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Icon name="FileText" size={24} className="text-primary" />
          <h3 className="text-lg font-semibold text-text-primary">Tax Information</h3>
        </div>
        
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-3 py-2 border border-border rounded-lg text-sm text-text-primary bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          {years.map((year) => (
            <option key={year} value={year}>FY {year}</option>
          ))}
        </select>
      </div>

      {/* Tax Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Receipt" size={16} className="text-success" />
            <span className="text-sm font-medium text-text-primary">Total Income</span>
          </div>
          <p className="text-xl font-bold text-text-primary">
            ₹{(currentYearData.totalIncome || 0).toLocaleString('en-IN')}
          </p>
          <p className="text-xs text-text-secondary mt-1">Before deductions</p>
        </div>

        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Percent" size={16} className="text-warning" />
            <span className="text-sm font-medium text-text-primary">GST Collected</span>
          </div>
          <p className="text-xl font-bold text-text-primary">
            ₹{(currentYearData.gstCollected || 0).toLocaleString('en-IN')}
          </p>
          <p className="text-xs text-text-secondary mt-1">18% on applicable sales</p>
        </div>

        <div className="bg-muted/30 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Minus" size={16} className="text-error" />
            <span className="text-sm font-medium text-text-primary">TDS Deducted</span>
          </div>
          <p className="text-xl font-bold text-text-primary">
            ₹{(currentYearData.tdsDeducted || 0).toLocaleString('en-IN')}
          </p>
          <p className="text-xs text-text-secondary mt-1">Tax deducted at source</p>
        </div>
      </div>

      {/* Tax Breakdown */}
      <div className="bg-muted/20 rounded-lg p-4 mb-6">
        <h4 className="text-sm font-semibold text-text-primary mb-3">Tax Breakdown</h4>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-text-secondary">Gross Revenue</span>
            <span className="text-sm font-medium text-text-primary">
              ₹{(currentYearData.grossRevenue || 0).toLocaleString('en-IN')}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-text-secondary">Platform Fees</span>
            <span className="text-sm font-medium text-error">
              -₹{(currentYearData.platformFees || 0).toLocaleString('en-IN')}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-text-secondary">Payment Gateway Charges</span>
            <span className="text-sm font-medium text-error">
              -₹{(currentYearData.paymentCharges || 0).toLocaleString('en-IN')}
            </span>
          </div>
          <div className="border-t border-border pt-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-text-primary">Net Taxable Income</span>
              <span className="text-sm font-bold text-text-primary">
                ₹{(currentYearData.netTaxableIncome || 0).toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* GST Information */}
      <div className="bg-gradient-to-r from-warning/10 to-warning/5 border border-warning/20 rounded-lg p-4 mb-6">
        <div className="flex items-start space-x-3">
          <Icon name="AlertTriangle" size={20} className="text-warning mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-1">GST Registration Status</h4>
            <p className="text-sm text-text-secondary mb-2">
              {currentYearData.gstRegistered ? 
                `GST Number: ${currentYearData.gstNumber || 'XXXXXXXXXXXXXXXXX'}` :
                'GST registration required if annual turnover exceeds ₹20,00,000'
              }
            </p>
            {!currentYearData.gstRegistered && (
              <Button variant="warning" iconName="ExternalLink" iconPosition="right">
                Register for GST
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Download Statements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Download" size={16} className="text-primary" />
            <span className="text-sm font-medium text-text-primary">Annual Statement</span>
          </div>
          <p className="text-xs text-text-secondary mb-3">
            Complete financial summary for tax filing
          </p>
          <Button
            variant="outline"
            onClick={() => handleDownloadStatement('Annual')}
            loading={isDownloading}
            fullWidth
            iconName="Download"
            iconPosition="left"
          >
            Download PDF
          </Button>
        </div>

        <div className="border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="FileSpreadsheet" size={16} className="text-success" />
            <span className="text-sm font-medium text-text-primary">Transaction Report</span>
          </div>
          <p className="text-xs text-text-secondary mb-3">
            Detailed transaction data for accounting
          </p>
          <Button
            variant="outline"
            onClick={() => handleDownloadStatement('Transaction')}
            loading={isDownloading}
            fullWidth
            iconName="Download"
            iconPosition="left"
          >
            Download Excel
          </Button>
        </div>
      </div>

      {/* Tax Advisory */}
      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-1">Tax Advisory</h4>
            <p className="text-sm text-text-secondary mb-2">
              Consult with a tax professional for accurate filing and compliance. Keep all transaction records for audit purposes.
            </p>
            <Button variant="link" iconName="ExternalLink" iconPosition="right">
              Find Tax Consultants
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxInformation;
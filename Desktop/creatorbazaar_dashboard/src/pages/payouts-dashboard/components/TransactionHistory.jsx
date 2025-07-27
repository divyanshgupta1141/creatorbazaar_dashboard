import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TransactionHistory = ({ transactions }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-success bg-success/10';
      case 'pending':
        return 'text-warning bg-warning/10';
      case 'failed':
        return 'text-error bg-error/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const getPaymentMethodIcon = (method) => {
    switch (method) {
      case 'UPI':
        return 'Smartphone';
      case 'Bank Transfer':
        return 'Building2';
      case 'Digital Wallet':
        return 'Wallet';
      default:
        return 'CreditCard';
    }
  };

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = transactions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-surface rounded-xl card-shadow p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">Transaction History</h3>
        <Button variant="outline" iconName="Download" iconPosition="left">
          Export
        </Button>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">Date</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">Amount</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">Method</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((transaction) => (
              <tr key={transaction.id} className="border-b border-border hover:bg-muted/50 transition-micro">
                <td className="py-4 px-4 text-sm text-text-primary">
                  {new Date(transaction.date).toLocaleDateString('en-IN')}
                </td>
                <td className="py-4 px-4 text-sm font-medium text-text-primary">
                  ₹{transaction.amount.toLocaleString('en-IN')}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <Icon name={getPaymentMethodIcon(transaction.method)} size={16} className="text-text-secondary" />
                    <span className="text-sm text-text-primary">{transaction.method}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                    {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <Button variant="ghost" iconName="Eye" onClick={() => setExpandedRow(expandedRow === transaction.id ? null : transaction.id)}>
                    View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {currentTransactions.map((transaction) => (
          <div key={transaction.id} className="bg-muted/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-text-secondary">
                {new Date(transaction.date).toLocaleDateString('en-IN')}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name={getPaymentMethodIcon(transaction.method)} size={16} className="text-text-secondary" />
                <span className="text-sm text-text-primary">{transaction.method}</span>
              </div>
              <span className="text-lg font-semibold text-text-primary">
                ₹{transaction.amount.toLocaleString('en-IN')}
              </span>
            </div>
            {expandedRow === transaction.id && (
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-sm text-text-secondary">Transaction ID: {transaction.id}</p>
                <p className="text-sm text-text-secondary">Reference: {transaction.reference}</p>
              </div>
            )}
            <button
              onClick={() => setExpandedRow(expandedRow === transaction.id ? null : transaction.id)}
              className="mt-2 text-sm text-primary hover:text-accent transition-micro"
            >
              {expandedRow === transaction.id ? 'Hide Details' : 'View Details'}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-text-secondary">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, transactions.length)} of {transactions.length} transactions
          </p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              iconName="ChevronLeft"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <span className="px-3 py-1 text-sm text-text-primary">
              {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              iconName="ChevronRight"
              iconPosition="right"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;